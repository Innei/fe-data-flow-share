import { Excalidraw } from '@excalidraw/excalidraw'
import { defineDefaultSlide } from '../utils/define-slide'
import Draw from './code/arch-1.json'
export default defineDefaultSlide({
  title: 'Persist Data using IndexedDB',
  content: (
    <div className="h-full w-full flex flex-col">
      <p>
        至此，我们实现了通过 Store 去管理数据，而不是依赖
        Query，有效减少了乐观更新时的心智负担，也减少了冗余数据。
      </p>
      <p>那么，如何实现数据的持久化？</p>

      <div className="h-0 grow mt-2 text-base">
        <Excalidraw
          excalidrawAPI={(api) => {
            setTimeout(() => {
              api.scrollToContent(undefined, { fitToContent: true })
            }, 100)
          }}
          initialData={Draw as any}
          viewModeEnabled
        />
      </div>
    </div>
  ),
})
