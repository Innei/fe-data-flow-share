import type { Variants } from 'framer-motion'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useRef, useState, type FC } from 'react'

import classNames from 'classnames'
import { MotionButtonBase } from '../button'

const copyIconVariants: Variants = {
  initial: {
    opacity: 1,
    scale: 1,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
}

export const CopyButton: FC<{
  value: string
  className?: string
}> = ({ value, className }) => {
  const [copied, setCopied] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const copiedTimerRef = useRef<any>()
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(value)
    setCopied(true)

    clearTimeout(copiedTimerRef.current)
    copiedTimerRef.current = setTimeout(() => {
      setCopied(false)
    }, 2000)
  }, [value])
  return (
    <MotionButtonBase
      type="button"
      onClick={handleCopy}
      className={classNames(
        'center flex text-xs',
        'rounded-md border border-accent/5 bg-accent/80 p-1.5 text-white backdrop-blur duration-200',

        className,
      )}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.i
            key="copied"
            className="i-mingcute-check-fill size-4"
            {...copyIconVariants}
          />
        ) : (
          <motion.i
            key="copy"
            className="i-mingcute-copy-2-fill size-4"
            {...copyIconVariants}
          />
        )}
      </AnimatePresence>
    </MotionButtonBase>
  )
}
