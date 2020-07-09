import Link from 'next/link'
import {useEffect, useState} from 'react'

export default function Index({posts: serverPosts}) {
  const [posts, setPosts] = useState(serverPosts)
  useEffect(() => {
    async function load() {
      const data = await fetch('http://localhost:4200/posts')
      const posts = await data.json()
      setPosts(posts)
    }

    if (!posts) {
      load()
    }
  }, [])

  if (!posts) {
    return <h1>Loading...</h1>
  }
  return <>
    Posts
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          {post.title} | <Link href={'/posts/[id]'} as={`/posts/${post.id}`}><a>Read...</a></Link>
        </li>
      ))}
    </ul>
  </>

}

Index.getInitialProps = async ({context, res}) => {
  if (!res) {
    return {posts: null}
  }
  const data = await fetch('http://localhost:4200/posts')
  const posts = await data.json()
  return {posts}
}