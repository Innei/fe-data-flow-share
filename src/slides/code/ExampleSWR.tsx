const fetcher = (url: string) => fetch(url).then((res) => res.json())
function useAppData() {
  return useSWR('https://jsonplaceholder.typicode.com/todos/1', fetcher)
}

function ExampleSWR() {
  const { data, error } = useAppData()

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
