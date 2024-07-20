import { defineDefaultSlide } from '../utils/define-slide'

import Video1 from './videos/local-database-search.mp4?url'
import Video2 from './videos/offline-support.mp4?url'
import Video3 from './videos/fast-read-local-data-then-refetch.mp4?url'
import { useModalStack } from 'rc-modal-sheet'

import { useRef, type FC } from 'react'
const CustomVideo: FC<{
  src: string
}> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      className="h-full w-full"
      onClick={() => {
        if (videoRef.current) {
          if (videoRef.current.paused) {
            videoRef.current.play()
          } else {
            videoRef.current.pause()
          }
        }
      }}
    />
  )
}
const Video = ({ caption, src }: { src: string; caption: string }) => {
  const { present } = useModalStack()
  const onClick = () => {
    present({
      max: true,
      title: 'Video Preview - ' + caption,
      clickOutsideToDismiss: true,
      content: () => <CustomVideo src={src} />,
    })
  }
  return (
    <div className="w-1/3 flex flex-col items-center justify-center gap-2">
      <video
        playsInline
        src={Video1}
        controls={false}
        onClick={() => onClick()}
        className="rounded-md overflow-hidden"
      />
      <caption className="text-xs">{caption}</caption>
    </div>
  )
}
const Videos = () => {
  return (
    <div className="w-full flex gap-3 overflow-x-auto whitespace-nowrap mt-8">
      <Video caption="Local Database Search" src={Video1} />
      <Video caption="Offline Support" src={Video2} />
      <Video caption="Fast Read Local Data Then Refetch" src={Video3} />
    </div>
  )
}

export default defineDefaultSlide({
  title: 'Features & FixMe',
  content: (
    <div className="h-full w-full flex flex-col">
      <ul className="text-xl mt-12">
        <li>更快的 App 加载数据，首屏数据不需要网络即可加载。</li>
        <li>可以实现离线使用</li>
        <li>利用本地数据库快速检索数据</li>
      </ul>

      <Videos />

      <ul className="text-xl !mt-12">
        <li>数据一致性问题</li>
        <li>过时数据无法自动清理</li>
      </ul>
    </div>
  ),
})
