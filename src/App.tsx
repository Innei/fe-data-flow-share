import React, {
  Suspense,
  lazy,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { RevealContext, initReveal } from './reveal/reaveal'
// We do not need to reset.css style from revealJS as the Tailwind CSS reset styles are already applied
// import "reveal.js/dist/reset.css";
import 'katex/dist/katex.min.css'
import 'reveal.js/dist/reveal.css'
import Presentation from './Presentation'
import { CONFIG } from './config'
import './reveal/reveal-theme.css'

import { BlurDotBg } from './color4bg/AbstractBackground/BlurDotBg.js'

function App() {
  const [reveal, setReveal] = useState<Reveal.Api>()
  const ExcalidrawWrapper = lazy(() => import('./components/ExcalidrawWrapper'))

  const bgRef = React.useRef<HTMLDivElement>(null)
  useEffect(() => {
    const r = initReveal(CONFIG.revealOptions)
    document.title = CONFIG.presentationTitle
    setReveal(r)
  }, [])

  useLayoutEffect(() => {
    if (!bgRef.current) return
    const $bg = bgRef.current
    const bg = new BlurDotBg({
      dom: 'bg',
      colors: ['#FFCADA', '#FFD4E2', '#FFDCE8', '#FFE9EA'],
      loop: true,
    })

    const observer = new ResizeObserver(() => {
      bg.resize()
    })

    observer.observe($bg)
  }, [])

  return (
    <>
      <RevealContext.Provider value={{ reveal }}>
        <Suspense
          fallback={
            <p className="absolute bottom-0 left-0 text-xs">
              Loading Excalidraw...
            </p>
          }
        >
          <ExcalidrawWrapper />
        </Suspense>
        <div id="bg" ref={bgRef} className="fixed z-0 inset-0"></div>
        <div className="reveal">
          <div className="slides">
            <Presentation />
          </div>
        </div>
      </RevealContext.Provider>
    </>
  )
}

export default App
