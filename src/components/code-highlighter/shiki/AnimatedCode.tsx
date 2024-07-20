import { useState, useEffect } from 'react'
import { ShikiHighLighter } from './Shiki'
import type { BundledLanguage } from 'shiki'

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
    <div
      onClick={() => {
        setStep((step + 1) % codes.length)
      }}
    >
      <ShikiHighLighter
        language={language}
        className="max-h-[9em] overflow-auto"
        magicMove
      >
        {code}
      </ShikiHighLighter>
    </div>
  )
}
