import { ReactNode, useContext, useEffect, useRef, useState } from 'react'
import Footer from '../components/footer/Footer'
import classNames from 'classnames'
import { isPDFExport } from '../reveal/reaveal'
import { PresentationContext, SlideContext } from '../utils/slide-context'
import { NEXT_KEYCODES, PREV_KEYCODES } from '../utils/keys'

export interface SlideProps {
  children: ReactNode
  showFooter?: boolean
  textAlign?: 'left' | 'center' | 'right'
  padding?: boolean
  backgroundImage?: string
  animateKeyFrames?: number

  autoAnimate?: boolean
}
const isPDF = isPDFExport()

export default function Slide(props: SlideProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const presentationState = useContext(PresentationContext)
  const [slideIndex, setSlideIndex] = useState<number>()
  const [wasVisible, setWasVisible] = useState(false)
  const [animateKeyFrame, setAnimateKeyFrame] = useState(
    isPDFExport() ? (props.animateKeyFrames ?? 0) : 0,
  )

  const animateKeyFrames = props.animateKeyFrames ?? 0
  useEffect(() => {
    if (presentationState) {
      const slideIndex = presentationState.allSlides.findIndex((s) => {
        return sectionRef.current == s
      })
      setSlideIndex(slideIndex)
    }
  }, [presentationState])

  const visible =
    slideIndex !== undefined &&
    slideIndex === presentationState?.currentSlideIndex
  useEffect(() => {
    const listener = (ev: KeyboardEvent) => {
      // Allow resetting `wasVisible` using r
      if (ev.key == 'r') {
        setWasVisible(false)
        if (visible) {
          setTimeout(() => {
            setWasVisible(true)
          }, 10)
        }
      }
    }
    if (visible) {
      setWasVisible(visible)
      document.addEventListener('keydown', listener)
    }
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [visible])

  useEffect(() => {
    const reveal = presentationState?.reveal

    const handleDirection = (
      ev: Event,
      direction: 'next' | 'prev' | 'none',
    ) => {
      if (direction === 'next') {
        if (animateKeyFrame < animateKeyFrames) {
          setAnimateKeyFrame((kf) => kf + 1)
          ev.preventDefault()
          ev.stopPropagation()
        } else {
          reveal!.next()
        }
      } else if (direction === 'prev') {
        if (animateKeyFrame > 0) {
          setAnimateKeyFrame((kf) => kf - 1)
          ev.preventDefault()
          ev.stopPropagation()
          ev.stopImmediatePropagation()
        } else {
          reveal!.prev()
        }
      }
    }
    // const isFirst = true// slideIndex === 0;
    // const isLast = true //presentationState && slideIndex === presentationState.allSlides.length - 1;
    if (reveal && visible) {
      // reveal.on("beforeslidechange", listener as never);
      // if (isFirst) {
      for (const keyCode of PREV_KEYCODES) {
        reveal.addKeyBinding(keyCode as never, (ev) => {
          handleDirection(ev, 'prev')
        })
      }
      // } else if (isLast) {
      for (const keyCode of NEXT_KEYCODES) {
        reveal.addKeyBinding(keyCode as never, (ev) => {
          handleDirection(ev, 'next')
        })
      }
      // }
    }
    return () => {
      if (reveal) {
        // reveal.off("beforeslidechange", listener as never);
        // if (isFirst) {
        for (const keyCode of PREV_KEYCODES) {
          reveal.removeKeyBinding(keyCode as never)
        }
        // } else if (isLast) {
        for (const keyCode of NEXT_KEYCODES) {
          reveal.removeKeyBinding(keyCode as never)
        }
        // }
      }
    }
  }, [
    presentationState?.reveal,
    animateKeyFrames,
    animateKeyFrame,
    visible,
    slideIndex,
    presentationState,
  ])

  return (
    <SlideContext.Provider
      value={{
        visible,
        wasVisible,
        keyframe: animateKeyFrame,
      }}
    >
      <section
        data-auto-animate={props.autoAnimate}
        data-background-image={props.backgroundImage}
        ref={sectionRef}
        className={classNames('w-full h-full', {
          '!relative !top-0 !left-0': isPDF,
        })}
      >
        <div
          className={classNames(
            'w-full h-full !flex flex-col justify-between',
            { 'text-left': props.textAlign === 'left' },
            { 'text-center': props.textAlign === 'center' },
            { 'text-right': props.textAlign === 'right' },
            { 'mb-4': props.showFooter },
            { 'pt-4 pl-8 xl:pt-8 xl:pl-16': props.padding },
          )}
        >
          {props.children}
          {props.showFooter !== false && (
            <div className={classNames({ 'xl:-ml-16 -ml-8': props.padding })}>
              <Footer />
            </div>
          )}
        </div>
      </section>
    </SlideContext.Provider>
  )
}
