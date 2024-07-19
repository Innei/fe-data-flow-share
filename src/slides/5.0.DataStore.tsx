import { useEffect, useState } from 'react'
import { ShikiHighLighter } from '../components/code-highlighter'
import { defineDefaultSlide } from '../utils/define-slide'
import { useModalStack } from 'rc-modal-sheet'
import { StyledButton } from 'shiro-rc'
import { Excalidraw } from '@excalidraw/excalidraw'

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
  `const useFeedStore = create({ data: {} })
const useEntryStore = create({ data: {} })
const feed = {
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
}
const entry = {
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
}
const feedMap = {}, entryMap = {}
feedMap[feed.id] = feed
entryMap[entry.id] = entry
useFeedStore.setState({ data: feedMap }), useEntryStore.setState({ data: entryMap })`,
  `
// In UI Component
// Query Data
useQuery({
  queryKey: ['feed', feed.id],
  queryFn: async () => {
    const { feed, entry } = await fetcher()
    const feedMap = {}, entryMap = {}
    feedMap[feed.id] = feed
    entryMap[entry.id] = entry
    useFeedStore.setState({ data: feedMap }), useEntryStore.setState({ data: entryMap })
  },
})
// Access Data Store
const feed = useFeedStore((state) => state.data[feed.id])
const entry = useEntryStore((state) => state.data[entry.id])
// Optimize Re-render
const { title, } = useFeedStore(useShallow((state) => ({ title: state.data[feed.id], /* other need data field */ })))

`.trim(),
]

import Draw from './code/draw3.json'
import { AnimatedCode } from '../components/code-highlighter/shiki/AnimatedCode'
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

      <div className="grid grid-cols-2 gap-4 h-0 grow relative">
        <AnimatedCode codes={codes1} language="typescript" />
        <AnimatedCode codes={codes2} language="typescript" />
      </div>
    </div>
  ),
})
