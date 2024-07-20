import { memo } from 'react'

// @ts-nocheck
const EntryDetail = ({ entryId }: { entryId: string }) => {
  // 多对一关系
  const { feedId, title } = useEntryStore((state) => state.data[entryId])
  const feed = useFeedStore((state) => state.data[feedId])
  return <>{/* .... */}</>
}

const EntryList = ({ feedId }: { feedId: string }) => {
  // 一对多关系
  const { entryIdList } = useFeedStore((state) => state.entryIdList)
  return (
    <>
      {entryIdList.map((entryId) => (
        <EntryItem id={entryId} key={entryId} />
      ))}
    </>
  )
}

const EntryItem = memo(({ id }: { id: string }) => {
  const entry = useEntryStore((state) => state.data[id])

  // ...
})
