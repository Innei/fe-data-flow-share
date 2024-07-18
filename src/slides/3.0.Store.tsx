import { ShikiHighLighter } from '../components/code-highlighter'
import TitleContentSlide from '../slide-templates/TitleContentSlide'

export default function Page() {
  return (
    <TitleContentSlide
      title={<h2>Store</h2>}
      content={
        <div className="h-full w-full">
          <p className="text-xl">
            使用 <code>useSyncExternalStore</code> 实现更加易用的 State
            Management Library.
          </p>
          <p className="text-xl">
            <ul>
              <li>
                <a href="https://jotai.org/" target="_blank">
                  Jotai
                </a>
                , primitive and flexible state management for React
              </li>

              <li>
                <a href="https://zustand-demo.pmnd.rs/" target="_blank">
                  Zustand
                </a>
                , Bear necessities for state management in React
              </li>

              <li>
                <a href="https://valtio.pmnd.rs" target="_blank">
                  Valtio
                </a>
                , Valtio makes proxy-state simple for React and Vanilla
              </li>
            </ul>
          </p>

          <p className="fragment text-xl grid grid-cols-2 gap-6">
            <ShikiHighLighter
              code={`
const [count, setCount] = useAtom(countAtom)
// ...
jotaiStore.get(countAtom)
jotaiStote.set(countAtom, 1)
                `.trim()}
              language="tsx"
            />
            <ShikiHighLighter
              code={`
const useAppStore = create((set, get) => ({
   count: 0
}))

const { count } = useAppStore()

// ...
useAppStore.getState()
useAppStore.setState({ count: 1 })
                `.trim()}
              language="tsx"
            />
          </p>
        </div>
      }
    />
  )
}
