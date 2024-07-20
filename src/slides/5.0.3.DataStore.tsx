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

import CodeDemo2 from './code/StoreDemo3?raw'
import CodeDemo1 from './code/StoreDemo2?raw'
const codes1 = [CodeDemo1, CodeDemo2]
export default defineDefaultSlide({
  title: 'Use Store Data In Components',
  content: (
    <div className="h-full w-full flex flex-col">
      <p>
        我们把数据放到 Store 管理之后，在组件中我们应该传递数据 Id，而不是实体。
      </p>
      <AnimatedCode language="typescript" codes={codes1}></AnimatedCode>
    </div>
  ),
})
