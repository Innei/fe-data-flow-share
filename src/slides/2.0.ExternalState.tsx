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
          <div className="grid gap-3 grid-cols-2">
            <ShikiHighLighter
              code={`import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

function TodosApp() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  // ...
}`}
              language="tsx"
            />
            <ShikiHighLighter
              code={`let nextId = 0;
let todos = [{ id: nextId++, text: 'Todo #1' }];
let listeners = [];

export const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }]
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  }
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
`.trim()}
              className="max-h-[300px] overflow-auto"
              language="ts"
            ></ShikiHighLighter>
          </div>
          <p className="text-xl">通过订阅数据源，更新 UI。</p>
        </div>
      }
    />
  )
}
