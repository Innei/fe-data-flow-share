import { ReactNode } from 'react'
import Slide, { SlideProps } from './Slide'

interface TitleContentSlideProps {
  title: ReactNode
  content: ReactNode
  slideProps?: Partial<SlideProps>
  autoAnimate?: boolean
}

export default function TitleContentSlide(props: TitleContentSlideProps) {
  return (
    <Slide
      textAlign="left"
      padding
      autoAnimate={props.autoAnimate}
      {...props.slideProps}
    >
      {props.title}
      <div className="h-[2rem]"></div>
      {props.content}
    </Slide>
  )
}
