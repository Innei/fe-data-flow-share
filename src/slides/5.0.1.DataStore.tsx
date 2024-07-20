import { Excalidraw } from '@excalidraw/excalidraw'
import { useModalStack } from 'rc-modal-sheet'
import { StyledButton } from 'shiro-rc'
import { defineDefaultSlide } from '../utils/define-slide'
import Demo2 from './code/QueryStoreFetcher?raw'
import Demo3 from './code/QueryStoreFetcher2?raw'
const codes1 = [
  `{
  "view": 0,
  "read": true,
  "entries": {
      "id": "35509196741702656",
      "title": "在 Nest.js 中使用 Auth.js",
      "url": "https://innei.in/posts/tech/using-auth-js-in-nestjs",
      "guid": "https://innei.in/posts/tech/using-auth-js-in-nestjs",
      "author": "Innei",
      "authorUrl": null,
      "authorAvatar": null,
      "changedAt": "2024-07-15T03:04:27.227Z",
      "publishedAt": "2024-07-14T06:45:25.000Z",
      "images": null,
      "categories": null,
      "enclosures": null,
  },
  "feeds": {
      "id": "33834308749487164",
      "url": "http://innei.in/feed",
      "title": "静かな森",
      "description": "致虚极，守静笃。",
      "siteUrl": "https://innei.in/",
      "image": "https://innei.in/innei.svg",
      "checkedAt": "2024-07-17T17:10:42.128Z",
      "lastModifiedHeader": "Wed, 17 Jul 2024 04:52:30 GMT",
      "etagHeader": null,
      "ttl": 60,
      "errorMessage": null,
      "errorAt": null,
      "ownerUserId": null
  },
  "collections": null,
}`,
  Demo2,
  Demo3,
  `
// In UI Component
// Query Data
useQuery({
  queryKey: ['entry', entryId],
  queryFn: storeActions.fetchEntry(entryId)
})
// Access Data Store
const feed = useFeedStore((state) => state.data[feedId])
const entry = useEntryStore((state) => state.data[entryId])
// Optimize Re-render
const { title, } = useFeedStore(useShallow((state) => ({ title: state.data[feedId], /* other need data field */ })))

`.trim(),
]

import { AnimatedCode } from '../components/code-highlighter/shiki/AnimatedCode'
import Draw from './code/draw3.json'
const Present = () => {
  const { present } = useModalStack()

  return (
    <StyledButton
      className="inline text-xs float-right"
      onClick={() => {
        present({
          title: 'Draw',
          max: true,
          content: () => (
            <Excalidraw
              zenModeEnabled
              viewModeEnabled
              initialData={Draw as any}
            />
          ),
        })
      }}
    >
      图解
    </StyledButton>
  )
}

const codes2 = [
  `Events.subscription.on('Entry#ReadUpdate', (id, status) => {
  // update 1st Query，EntryList
  queryClient.setData(['entries-list'], list => {
    const newList = [...list]
    const ref = list.find(i => i.id === id)
    ref.read = status
    return list
  })
  // update 2nd Query，EntryContent
  queryClient.setData(['entries', id], entry => {
    return {
      ...entry,
      read: status
      }
  })
  // more and more unknown queries, or future queries
})`,

  `Events.subscription.on('Entry#ReadUpdate', (id, status) => {
  useEntryStore.setState((state) =>
    produce(state, (draft) => {
      draft.data[id].read = status
    }),
  )
})`,
]

export default defineDefaultSlide({
  title: 'Update Data in the Store',
  content: (
    <div className="h-full w-full flex flex-col">
      <p>
        还记得之前我们使用外部状态库去管理数据吗？例如 Jotai，Zustand。
        <br />
        <br />
        如果我们把这些请求中的所有相同的数据都放到一个地方，那么我们就可以在任何地方使用这些数据。所有的数据在
        UI 中都是对于统一数据的引用。
        <Present />
      </p>

      <div className="grid grid-cols-2 gap-4 h-0 grow relative z-[10]">
        <AnimatedCode codes={codes1} language="typescript" />
        <AnimatedCode codes={codes2} language="typescript" />
      </div>

      <p className="flex flex-col text-xs absolute bottom-0 left-1/2 -translate-x-1/2">
        参考：
        <a
          href="https://innei.in/posts/dev-story/modular-request-data-management-concept"
          target="_blank"
        >
          模块化的请求数据统一管理的构想
        </a>
        <a
          href="https://innei.in/posts/tech/data-management-approach-for-zustand-and-react-query"
          target="_blank"
        >
          一种适用于 Zustand 和 React Query 的前端数据管理方式
        </a>
      </p>
    </div>
  ),
})
