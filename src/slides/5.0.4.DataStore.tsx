import { defineDefaultSlide } from '../utils/define-slide'

export default defineDefaultSlide({
  title: 'Store Data Summary',
  content: (
    <div className="h-full w-full flex flex-col">
      <p>
        至此，我们实现了通过 Store 去管理数据，而不是依赖
        Query，有效的减少了乐观更新时的心智负担，也减少了冗余数据。
      </p>
      <p>那么，如何实现数据的持久化？</p>
    </div>
  ),
})
