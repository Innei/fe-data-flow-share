import { ShikiHighLighter } from '../components/code-highlighter'
import { defineDefaultSlide } from '../utils/define-slide'
import Code1 from './code/ExampleSWR?raw'

export default defineDefaultSlide({
  autoAnimate: true,
  title: '数据从何而来？',
  content: (
    <div className="h-full w-full fade-in">
      <p className="text-xl">
        使用 SWR 封装一个
        Hook，可以在多个组件中复用同一个请求数据源，并且自动处理请求竞态问题。
      </p>
      <ShikiHighLighter code={Code1} language="tsx"></ShikiHighLighter>
    </div>
  ),
})
