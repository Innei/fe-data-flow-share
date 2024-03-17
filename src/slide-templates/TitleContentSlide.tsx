import { ReactNode } from "react";
import Slide, { SlideProps } from "./Slide";

interface TitleContentSlideProps {
  title: ReactNode;
  content: ReactNode;
  slideProps?: Partial<SlideProps>
}

export default function TitleContentSlide(props: TitleContentSlideProps) {
  return (
    <Slide textAlign="left" padding {...props.slideProps}>
      {props.title}
      <div className="h-[2rem]"></div>
      {props.content}
    </Slide>
  );
}
