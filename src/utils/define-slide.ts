import { createElement, type FC, type ReactNode } from 'react'
import TitleContentSlide, {
  type TitleContentSlideProps,
} from '../slide-templates/TitleContentSlide'

export const SlideSymbol = Symbol()

export interface Slide {
  element: ReactNode
}
export const defineSlide = <T extends object>(template: FC<T>) => {
  return (props: T) => {
    return {
      [SlideSymbol]: 1,
      element: createElement(template, props),
    } as Slide
  }
}

export const defineDefaultSlide = (props: TitleContentSlideProps) => {
  return defineSlide(TitleContentSlide)({
    ...props,
    title: createElement('h2', null, props.title),
  })
}
