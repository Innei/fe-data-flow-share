import { motion, type HTMLMotionProps } from 'framer-motion'
import React from 'react'

export const MotionButtonBase = React.forwardRef<
  HTMLButtonElement,
  HTMLMotionProps<'button'>
>(({ children, ...rest }, ref) => (
  <motion.button
    layout="size"
    initial
    whileFocus={{ scale: 1.02 }}
    whileTap={{ scale: 0.95 }}
    {...rest}
    ref={ref}
  >
    {children}
  </motion.button>
))
