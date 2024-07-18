import { useState, useEffect } from 'react'

function ExampleEffectFetch() {
  const [data, setData] = useState<null | any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}
