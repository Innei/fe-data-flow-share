/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import {
  type BundledLanguage,
  type BundledTheme,
  type DynamicImportLanguageRegistration,
  type DynamicImportThemeRegistration,
} from 'shiki'
import 'shiki-magic-move/dist/style.css'
import { ShikiMagicMove } from 'shiki-magic-move/react'
import { createHighlighterCore } from 'shiki/core'
import { default as getWasm } from 'shiki/wasm'

import classNames from 'classnames'
import { CopyButton } from '../copy-button'
import { shikiTransformers } from './shared'
import styles from './shiki.module.css'

const shiki = await createHighlighterCore({
  themes: [import('shiki/themes/github-light.mjs')],
  langs: [
    import('shiki/langs/javascript.mjs'),
    import('shiki/langs/typescript.mjs'),
  ],
  loadWasm: getWasm,
})

export interface ShikiProps {
  language: string | undefined
  code?: string

  attrs?: string
  className?: string

  theme?: string

  children?: string

  magicMove?: boolean
}

let langModule: Record<
  BundledLanguage,
  DynamicImportLanguageRegistration
> | null = null
let themeModule: Record<BundledTheme, DynamicImportThemeRegistration> | null =
  null
const codeTheme = 'github-light'
export const ShikiHighLighter: FC<ShikiProps> = (props) => {
  const { code: _code, children, language, className } = props
  const code = _code || children?.toString() || ''
  const loadThemesRef = useRef([] as string[])
  const loadLanguagesRef = useRef([] as string[])

  const [loaded, setLoaded] = useState(false)

  useLayoutEffect(() => {
    let isMounted = true
    setLoaded(false)

    async function loadShikiLanguage(language: string, languageModule: any) {
      if (!shiki) return
      if (!shiki.getLoadedLanguages().includes(language)) {
        await shiki.loadLanguage(await languageModule())
      }
    }
    async function loadShikiTheme(theme: string, themeModule: any) {
      if (!shiki) return
      if (!shiki.getLoadedThemes().includes(theme)) {
        await shiki.loadTheme(await themeModule())
      }
    }

    async function register() {
      if (!language || !codeTheme) return

      const [{ bundledLanguages }, { bundledThemes }] =
        langModule && themeModule
          ? [
              {
                bundledLanguages: langModule,
              },
              { bundledThemes: themeModule },
            ]
          : await Promise.all([import('shiki/langs'), import('shiki/themes')])

      langModule = bundledLanguages
      themeModule = bundledThemes

      if (
        language &&
        loadLanguagesRef.current.includes(language) &&
        codeTheme &&
        loadThemesRef.current.includes(codeTheme)
      ) {
        return
      }
      return Promise.all([
        (async () => {
          if (language) {
            const importFn = (bundledLanguages as any)[language]
            if (!importFn) return
            await loadShikiLanguage(language || '', importFn)
            loadLanguagesRef.current.push(language)
          }
        })(),
        (async () => {
          if (codeTheme) {
            const importFn = (bundledThemes as any)[codeTheme]
            if (!importFn) return
            await loadShikiTheme(codeTheme || '', importFn)
            loadThemesRef.current.push(codeTheme)
          }
        })(),
      ])
    }
    register().then(() => {
      if (isMounted) {
        setLoaded(true)
      }
    })
    return () => {
      isMounted = false
    }
  }, [codeTheme, language])

  if (!loaded) {
    return (
      <div className={styles['shiki-wrapper']}>
        <pre className={classNames(className)}>
          <code>{code}</code>
        </pre>
      </div>
    )
  }
  return <ShikiCode {...props} code={code} codeTheme={codeTheme} />
}

const ShikiCode: FC<
  ShikiProps & {
    codeTheme: string
  }
> = ({ code, language, codeTheme, className, attrs, magicMove }) => {
  const rendered = useMemo(() => {
    try {
      return shiki.codeToHtml(code!, {
        lang: language!,
        themes: {
          dark: codeTheme,
          light: codeTheme,
        },
        meta: {
          __raw: attrs,
        },
        transformers: shikiTransformers,
      })
    } catch {
      // console.error(err)
      return null
    }
  }, [code, language, codeTheme])

  if (!rendered) {
    return (
      <div className={styles['shiki-wrapper']}>
        <pre className={classNames(className)}>
          <code>{code}</code>
        </pre>
      </div>
    )
  }
  return (
    <div className={classNames('group relative', className)}>
      {magicMove ? (
        <div
          className={classNames(
            'group relative',
            styles['shiki-wrapper'],
            className,
          )}
        >
          <ShikiMagicMove
            code={code!}
            highlighter={shiki}
            lang={language!}
            theme={codeTheme}
            options={{
              duration: 800,
              stagger: 0.3,
            }}
          />
        </div>
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: rendered }}
          className={classNames(
            'group relative',
            styles['shiki-wrapper'],
            className,
          )}
        />
      )}
      <CopyButton
        value={code!}
        className="absolute right-1 top-1 opacity-0 duration-200 group-hover:opacity-100"
      />
    </div>
  )
}
