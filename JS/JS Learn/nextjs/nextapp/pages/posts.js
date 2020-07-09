import {MainLayout} from '../components/MainLayout'
import {useEffect, useState} from 'react'
import Link from 'next/link'

export default function Posts({posts: serverPosts}) {
  const [posts, setPosts] = useState(serverPosts)
  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:4200/posts`)
      const data = await res.json()
      setPosts(data)
    }

    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return <MainLayout><p>Loading...</p></MainLayout>
  }

  return <MainLayout title={'Posts'}>
    <h1>Posts</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    <ul>
      {posts.map(post => <li key={post.id}>
        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>)}
    </ul>
  </MainLayout>
}
Posts.getInitialProps = async ({req}) => {
  if (!req) {
    return {posts: null}
  }
  const res = await fetch(`${process.env.API_URL}/posts`)
  const posts = await res.json()
  return {posts}
}