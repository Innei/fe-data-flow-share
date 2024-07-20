import { defineDefaultSlide } from '../utils/define-slide'
export default defineDefaultSlide({
  title: 'Features & FixMe',
  content: (
    <div className="h-full w-full flex flex-col">
      <ul className="text-xl mt-12">
        <li>更快的 App 加载数据，首屏数据不需要网络即可加载。</li>
        <li>可以实现离线使用</li>
        <li>利用本地数据库快速检索数据</li>
      </ul>

      <ul className="text-xl mt-12">
        <li>...</li>
      </ul>
    </div>
  ),
})
