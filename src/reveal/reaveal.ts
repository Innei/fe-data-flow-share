import { createContext } from 'react'
import Reveal from 'reveal.js'

export const RevealContext = createContext<{ reveal: Reveal.Api | undefined }>({
  reveal: undefined,
})
export let reveal: Reveal.Api | undefined = undefined
export function initReveal(options: Reveal.Options) {
  reveal = new Reveal(options)
  reveal.initialize()
  return reveal
}

export function isPDFExport() {
  return (
    typeof window !== 'undefined' &&
    window.location.search.includes('print-pdf')
  )
}
