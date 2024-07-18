import { ShikiHighLighter } from '../components/code-highlighter'
import TitleContentSlide from '../slide-templates/TitleContentSlide'
import Code1 from './code/ExampleEffectFetch?raw'
export default function Page() {
  return (
    <TitleContentSlide
      autoAnimate
      title={<h2>数据从何而来？</h2>}
      content={
        <div className="h-full w-full">
          <ShikiHighLighter code={Code1} language="tsx"></ShikiHighLighter>

          <p className="text-xl fragment">
            只能在单一组件中使用，无法通过封装 Hook
            复用同一个请求数据源。并且无法很好的处理请求竞态问题。
            <br />
            <a
              target="_blank"
              href="https://blog.skk.moe/post/why-you-should-not-fetch-data-directly-in-use-effect/"
              className="flex items-center gap-1"
            >
              为什么你不应该在 React 中直接使用 useEffect 从 API 获取数据
              <i className="i-mingcute-external-link-line" />
            </a>
          </p>
        </div>
      }
    />
  )
}
