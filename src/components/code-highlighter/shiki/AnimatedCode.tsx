import { useState, useEffect } from 'react'
import { ShikiHighLighter } from './Shiki'
import type { BundledLanguage } from 'shiki'
import { clsxm } from 'shiro-rc'

export const AnimatedCode = ({
  codes: _codes,
  language,
}: {
  codes: string[]
  language?: BundledLanguage
}) => {
  const codes = _codes.map((i) => i.replace('// @ts-nocheck\n', '').trim())
  const [step, setStep] = useState(0)
  const [code, setCode] = useState(codes[0])

  useEffect(() => {
    setCode(codes[step] || '')
  }, [step])
  return (
    <div className="relative">
      <ShikiHighLighter
        language={language}
        className="max-h-[9em] overflow-auto"
        magicMove
      >
        {code}
      </ShikiHighLighter>

      <div className="absolute bottom-1 right-1 flex gap-1 opacity-90 hover:opacity-100 duration-200 text-secondary">
        <i
          className={clsxm(
            'i-mingcute-arrow-left-line size-4',

            step === 0 ? 'opacity-0 pointer-events-none' : '',
          )}
          onClick={() => {
            setStep((step) => (step - 1) % codes.length)
          }}
        ></i>
        <i
          onClick={() => {
            setStep((step) => (step + 1) % codes.length)
          }}
          className={clsxm(
            'i-mingcute-arrow-right-line size-4',

            step === codes.length - 1 ? 'opacity-0 pointer-events-none' : '',
          )}
        ></i>
      </div>
    </div>
  )
}
