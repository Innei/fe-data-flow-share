import { ShikiHighLighter } from '../components/code-highlighter'
import TitleContentSlide from '../slide-templates/TitleContentSlide'

export default function Page() {
  return (
    <TitleContentSlide
      title={<h2>State</h2>}
      content={
        <div className="h-full w-full">
          <p className="text-xl">
            一个 State 承载一个数据源，维护在单一组件中。
          </p>

          <ShikiHighLighter
            code="const [count, setCount] = useState(0)"
            language="javascript"
          />

          <div className="fragment">
            <p className="text-xl">通过 Props 向下传递到子组件。</p>
            <ShikiHighLighter
              code="<ChildComponent count={count} />"
              language="jsx"
            />
          </div>
        </div>
      }
    />
  )
}
