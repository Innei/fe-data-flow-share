/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useContext, useEffect, useState } from 'react'
import GradientTitle from './components/GradientTitle'
import { CONFIG } from './config'
import { RevealContext } from './reveal/reaveal'
import TitleSlide from './slide-templates/TitleSlide'
import { parseSlides } from './utils/parse-glob-slides'
import { PresentationContext, PresentationState } from './utils/slide-context'

const slides = import.meta.glob('./slides/*.tsx', { eager: true })
const Slides = parseSlides(slides)
export default function Presentation() {
  const { reveal } = useContext(RevealContext)
  const [presentationState, setPresentationState] =
    useState<PresentationState>()

  useEffect(() => {
    if (reveal) {
      const listener = () => {
        const allSlides = reveal?.getSlides()
        const index = allSlides.indexOf(reveal.getCurrentSlide())

        if (allSlides && index !== undefined) {
          setPresentationState({
            allSlides: allSlides,
            currentSlideIndex: index,
            reveal: reveal,
          })
        }
      }
      listener()
      reveal.on('slidechanged', listener)
      return () => {
        reveal.off('slidechanged', listener)
      }
    }
  }, [reveal])

  return (
    <PresentationContext.Provider value={presentationState}>
      <TitleSlide
        showFooter={true}
        position="center"
        title={
          <div className="flex flex-col justify-between items-center">
            <h1 className="mb-8 text-blue-500 text-8xl leading-tight font-black">
              <GradientTitle className="bg-gradient-to-b from-sky-500 to-blue-500 !font-medium !text-[82px]">
                {CONFIG.presentationTitle}
              </GradientTitle>
            </h1>

            <h2 className="text-4xl font-normal mb-0">
              {CONFIG.authors.map((a) => a.name).join(', ')}
            </h2>
            <a
              className="text-3xl inline-block w-fit mx-auto font-light tracking-tight mt-0"
              href={CONFIG.homepage}
              target="_blank"
            >
              {CONFIG.homepage}
            </a>
          </div>
        }
      />
      <Slides />
    </PresentationContext.Provider>
  )
}
