import { createContext } from "react";

export const SlideContext = createContext<{ visible: boolean; wasVisible: boolean; keyframe: number }>({
  visible: false,
  wasVisible: false,
  keyframe: 0,
});

export type PresentationState = {
  currentSlideIndex: number;
  allSlides: Element[];
  reveal: Reveal.Api;
};
export const PresentationContext = createContext<PresentationState | undefined>(undefined);
