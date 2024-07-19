/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { FC } from 'react'
import { SlideSymbol, type Slide } from './define-slide'

export const parseSlides =
  (slides: any): FC =>
  () => {
    return (
      <>
        {Object.keys(slides).map((slide) => {
          const Slide = slides[slide].default

          if (typeof Slide === 'function') {
            return <Slide key={slide} />
          }
          if (typeof Slide === 'object' && Slide && SlideSymbol in Slide) {
            const { element } = Slide as Slide
            return element
          }
        })}
      </>
    )
  }
