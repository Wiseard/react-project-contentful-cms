import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: '0bobkt3y189k',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
})

// client
//   .getEntries({ content_type: 'projects' })
//   .then((response) => console.log(response.items))
//   .catch(console.error)

export function useFetchProjects() {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])
  async function getData() {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { title, url, id, img }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}
