import { Excalidraw } from '@excalidraw/excalidraw'
import { defineDefaultSlide } from '../utils/define-slide'
import Draw from './code/draw2.json'
export default defineDefaultSlide({
  title: '何为乐观更新',
  content: (
    <div className="h-full w-full flex flex-col">
      <p className="text-xl">
        现在，你有想要对数据的变化做出控制。例如，当你做出某些数据操作时，你希望在服务器响应之前做出反应，并且直接呈现到
        UI 上反馈给使用者。这种行为称之为<strong>乐观更新</strong>。
      </p>
      <p className="text-xl">
        由于 SWR 并没有设计 Store 的概念，至此 SWR 的数据和 UI 进行了绑定，而在
        UI 外的数据更新将无法直接操作。这时候你转向了更加强大的 Tanstack Query。
      </p>

      <div className="h-0 grow text-base">
        <Excalidraw
          zenModeEnabled
          viewModeEnabled
          initialData={Draw as any}
        ></Excalidraw>
      </div>
    </div>
  ),
})
