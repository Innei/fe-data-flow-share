import { useModalStack } from 'rc-modal-sheet'
import { defineDefaultSlide } from '../utils/define-slide'

import { AnimatedCode } from '../components/code-highlighter/shiki/AnimatedCode'
const Present = () => {
  const { present } = useModalStack()

  // return (
  //   <StyledButton
  //     className="inline text-xs float-right"
  //     onClick={() => {
  //       present({
  //         title: 'Draw',
  //         max: true,
  //         content: () => (
  //           <Excalidraw
  //             zenModeEnabled
  //             viewModeEnabled
  //             initialData={Draw as any}
  //           />
  //         ),
  //       })
  //     }}
  //   >
  //     图解
  //   </StyledButton>
  // )

  return null
}
import Demo2 from './code/QueryStoreFetcher2?raw'
import Demo3 from './code/QueryStoreFetcher3?raw'

const codes1 = [
  `const data = {"entries": {
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
}}`,
  `const data = {"entries": {
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
      "feedId": "33834308749487164",
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
}}`,
  Demo2,
  Demo3,
]
import CodeDemo1 from './code/StoreDemo1?raw'
const codes2 = [CodeDemo1]
export default defineDefaultSlide({
  title: 'Data Relationship in Store',
  content: (
    <div className="h-full w-full flex flex-col">
      <p>
        像上面那样，我们把请求数据根据数据结构进行拆分，就像服务端的 DB Schema
        一样，按类别装入各个 Store 中。
        <br />
        <br />
        那么，数据之间的关联，是怎么进行的呢。
        <span className="fragment font-bold">答案是通过 Id 与 Id 的关联。</span>
      </p>
      <div className="grid grid-cols-2 gap-4">
        <AnimatedCode language="typescript" codes={codes1}></AnimatedCode>
        <AnimatedCode language="tsx" codes={codes2}></AnimatedCode>
      </div>
    </div>
  ),
})
