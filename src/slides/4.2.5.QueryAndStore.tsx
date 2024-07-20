/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useModalStack } from 'rc-modal-sheet'
import { StyledButton } from 'shiro-rc'
import { ShikiHighLighter } from '../components/code-highlighter'
import { defineDefaultSlide } from '../utils/define-slide'
import CodeDemo1 from './code/follow-action.ts?raw'
const Present = () => {
  const { present } = useModalStack()
  return (
    <StyledButton
      onClick={() => {
        present({
          title: 'Code Demo',
          max: true,
          content: () => (
            <ShikiHighLighter language="ts">{CodeDemo1}</ShikiHighLighter>
          ),
        })
      }}
    >
      Realworld Code
    </StyledButton>
  )
}
export default defineDefaultSlide({
  title: 'Tanstack Query 的乐观更新',
  autoAnimate: true,
  content: (
    <div className="h-full w-full">
      <p>
        比如当 Entry 的阅读状态发生了改变，我们需要同时去对两个 Query
        的数据进行更新。
      </p>

      <ShikiHighLighter className="max-h-[9em]" language="ts">
        {`Events.subscription.on('Entry#ReadUpdate', (id, status) => {
  // 更新第一个 Query，EntryList
  queryClient.setData(['entries-list'], list => {
    const newList = [...list]
    const ref = list.find(i => i.id === id)
    ref.read = status
    return list
  })
  // 更新第二个 Query，EntryContent
  queryClient.setData(['entries', id], entry => {
    return {
      ...entry,
      read: status
      }
  })
})`}
      </ShikiHighLighter>

      <p className="fragment text-sm mb-0">
        还好，这里我们早期的需求，也许只有两个 Query
        引用了同一数据，我们明确的知道，我们应该去更新哪些 Query 的数据。
        <br />
        随着时间的推移，越来的越多的模块和功能的加入，和开发人员的加入，
        <span className="text-red-500 font-bold">
          你还能分辨出到底哪些 Query 的数据需要更新吗
        </span>
        ？
      </p>

      <Present />
    </div>
  ),
})
