/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Excalidraw } from '@excalidraw/excalidraw'
import { useModalStack } from 'rc-modal-sheet'
import { StyledButton } from 'shiro-rc'
import { ShikiHighLighter } from '../components/code-highlighter'
import { defineDefaultSlide } from '../utils/define-slide'
import D1 from './code/draw1.json'

const Present = () => {
  const { present } = useModalStack()

  return (
    <StyledButton
      onClick={() => {
        present({
          title: 'Draw',
          max: true,

          content: () => (
            <Excalidraw
              viewModeEnabled
              excalidrawAPI={(api) => {
                setTimeout(() => {
                  api.scrollToContent(undefined, { fitToContent: true })
                }, 100)
              }}
              // @ts-expect-error
              initialData={D1}
            ></Excalidraw>
          ),
        })
      }}
    >
      图解
    </StyledButton>
  )
}

export default defineDefaultSlide({
  title: 'Tanstack Query 的乐观更新',
  autoAnimate: true,
  content: (
    <div className="h-full w-full">
      <p>
        上面的两个接口数据会在两个模块中使用，通过 <code>`useQuery`</code>{' '}
        消费数据。
      </p>
      <div className="grid grid-cols-2 gap-4">
        <ShikiHighLighter className="max-h-[9em]" language="ts">
          {`// GET /entries
const useEntriesQuery = () => useQuery({
  queryKey: ['entries-list'],
  queryFn: () => fetch('/entries')
})
const { data } = useEntriesQuery()`}
        </ShikiHighLighter>
        <ShikiHighLighter className="max-h-[9em]" language="ts">
          {`// GET /entries/:id
const useEntryIdQuery = id => useQuery({
  queryKey: ['entries', id],
  queryFn: () => fetch('/entries/' + id)
})
const { data } = useEntryIdQuery(id)`}
        </ShikiHighLighter>
      </div>
      <Present />

      <p className="fragment">
        这两个模块中使用的数据是相同的，但是在每个 Query
        中确实相互独立的。这些冗余的数据让此前基础的乐观更新越来越难以维护。
      </p>
    </div>
  ),
})
