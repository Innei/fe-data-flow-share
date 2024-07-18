import { ShikiHighLighter } from '../components/code-highlighter'
import TitleContentSlide from '../slide-templates/TitleContentSlide'
import Code1 from './code/ExampleSWR?raw'
export default function Page() {
  return (
    <TitleContentSlide
      autoAnimate
      title={<h2>数据从何而来？</h2>}
      content={
        <div className="h-full w-full">
          <ShikiHighLighter code={Code1} language="tsx"></ShikiHighLighter>

          <p className="text-xl fragment">
            使用 SWR 封装一个
            Hook，可以在多个组件中复用同一个请求数据源，并且自动处理请求竞态问题。
          </p>
        </div>
      }
    />
  )
}
