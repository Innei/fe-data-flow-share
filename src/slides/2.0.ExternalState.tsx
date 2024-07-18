import { ShikiHighLighter } from '../components/code-highlighter'
import TitleContentSlide from '../slide-templates/TitleContentSlide'

export default function Page() {
  return (
    <TitleContentSlide
      title={<h2>External State</h2>}
      content={
        <div className="h-full w-full">
          <p className="text-xl">
            数据脱离 UI，由外部提供。数据变化同步到 UI 渲染。
          </p>

          <p className="text-xl">
            <code>`useSyncExternalStore`</code>
          </p>
          <ShikiHighLighter
            code={`import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

function TodosApp() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  // ...
}`}
            language="tsx"
          />

          <p className="text-xl">通过订阅数据源，更新 UI。</p>
        </div>
      }
    />
  )
}
