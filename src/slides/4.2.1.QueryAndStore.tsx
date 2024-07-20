import { ShikiHighLighter } from '../components/code-highlighter'
import { defineDefaultSlide } from '../utils/define-slide'

export default defineDefaultSlide({
  title: 'Tanstack Query 的乐观更新',
  content: (
    <div className="h-full w-full">
      <p>
        在这里，我们可以使用全局的 <code>queryClient</code>{' '}
        来操作数据。这样我们就可以在任何地方对数据进行操作，而不仅仅局限于 UI。
      </p>
      <ShikiHighLighter magicMove language="ts" attrs="{10-11}">
        {`const queryClient = useQueryClient()

useMutation({
  mutationFn: updateTodo,
  onMutate: async (newTodo) => {
    await queryClient.cancelQueries({ queryKey: ['todos'] })

    const previousTodos = queryClient.getQueryData(['todos'])

    // Optimistically update to the new value
    queryClient.setQueryData(['todos'], (old) => [...old, newTodo])

    return { previousTodos }
  },
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(['todos'], context.previousTodos)
  },
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})`}
      </ShikiHighLighter>
    </div>
  ),
})
