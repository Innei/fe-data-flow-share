import { defineDefaultSlide } from '../utils/define-slide'
import Image1 from './images/tw-1.png?url'
import Image2 from './images/tw-2.png?url'
export default defineDefaultSlide({
  title: 'What is the Future',
  content: (
    <div className="h-full w-full flex flex-col">
      <p>那么，未来的方向是什么？</p>

      <div className="text-lg font-semibold">
        <span>Local First</span>
      </div>
      <div className="absolute bottom-0 left-[40px] flex gap-4">
        <img src={Image1} className="w-[460px] object-contain" />
        <img src={Image2} className="w-[460px] object-contain" />
      </div>
    </div>
  ),
})
