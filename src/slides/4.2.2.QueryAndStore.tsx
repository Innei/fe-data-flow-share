import { ShikiHighLighter } from '../components/code-highlighter'
import { defineDefaultSlide } from '../utils/define-slide'

export default defineDefaultSlide({
  title: 'Tanstack Query 的乐观更新',
  content: (
    <div className="h-full w-full">
      <p>服务端经常返回一些嵌套数据。例如下面的例子。</p>
      <div className="grid grid-cols-2 gap-4">
        <ShikiHighLighter className="max-h-[9em]" language="json">
          {`// GET /entries
{
    "code": 0,
    "data": {
        "view": 0,
        "read": true,
        "entries": {
            "id": "35509196741702656",
            "title": "在 Nest.js 中使用 Auth.js",
            "url": "https://innei.in/posts/tech/using-auth-js-in-nestjs",
            "content": "<p>当前内容无法在 RSS render 中正确渲染，请前往：<a href=\"https://innei.in/posts/tech/using-auth-js-in-nestjs\" target=\"_blank\">$https://innei.in/posts/tech/using-auth-js-in-nestjs</a></p>",
            "description": "当前内容无法在 RSS render 中正确渲染，请前往：$https://innei.in/posts/tech/using-auth-js-in-nestjs",
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
    }
}`}
        </ShikiHighLighter>
        <ShikiHighLighter className="max-h-[9em]" language="json">
          {`// GET /entries/:id
{
    "code": 0,
    "data": [
        {
            "read": true,
            "view": 0,
            "entries": {
                "id": "35509196741702656",
                "title": "在 Nest.js 中使用 Auth.js",
                "url": "https://innei.in/posts/tech/using-auth-js-in-nestjs",
                "description": "当前内容无法在 RSS render 中正确渲染，请前往：$https://innei.in/posts/tech/using-auth-js-in-nestjs",
                "guid": "https://innei.in/posts/tech/using-auth-js-in-nestjs",
                "author": "Innei",
                "authorUrl": null,
                "authorAvatar": null,
                "changedAt": "2024-07-15T03:04:27.227Z",
                "publishedAt": "2024-07-14T06:45:25.000Z",
                "images": null,
                "categories": null,
                "enclosures": null
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
            "settings": {}
        },
}`}
        </ShikiHighLighter>
      </div>
      <p className="fragment">
        我们主要到两个接口的数据存在相同结构，但是我们在使用数据时候，会一个接口对应一个
        Query。
      </p>
    </div>
  ),
})
