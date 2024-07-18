import { ReactNode, type FC } from 'react'
import Slide, { SlideProps } from './Slide'

export interface TitleContentSlideProps {
  title: ReactNode
  content: ReactNode
  slideProps?: Partial<SlideProps>
  autoAnimate?: boolean
}

const TitleContentSlide: FC<TitleContentSlideProps> = (props) => {
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

export default TitleContentSlide
