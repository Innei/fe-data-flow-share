const EntryDetail = ({ entryId }: { entryId: string }) => {
  const { feedId, title } = useEntryStore((state) => state.data[entryId])
  const feed = useFeedStore((state) => state.data[feedId])
  return <>{/* .... */}</>
}
