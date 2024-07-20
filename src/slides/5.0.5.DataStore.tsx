import { Excalidraw } from '@excalidraw/excalidraw'
import { defineDefaultSlide } from '../utils/define-slide'
import Draw from './code/arch-2.json'
export default defineDefaultSlide({
  title: 'Data Flow Summary',
  content: (
    <div className="h-full w-full flex flex-col">
      <div className="h-0 grow mt-2 text-base">
        <Excalidraw
          excalidrawAPI={(api) =>
            setTimeout(
              () =>
                api.scrollToContent(undefined, {
                  fitToContent: true,
                }),
              300,
            )
          }
          initialData={Draw as any}
          zenModeEnabled
          viewModeEnabled
        />
      </div>
    </div>
  ),
})
