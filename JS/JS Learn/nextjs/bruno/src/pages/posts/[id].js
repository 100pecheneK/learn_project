import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Link from 'next/link'

export default function Post({post: serverPost}) {
  const [post, setPost] = useState(serverPost)
  const router = useRouter()
  useEffect(() => {
    async function load() {
      const data = await fetch(`http://localhost:4200/posts/${router.query.id}`)
      const post = await data.json()
      setPost(post)
    }

    if (!post) {
      load()
    }
  }, [])

  if (!post) {
    return <h1>Loading...</h1>
  }
  return <>
    <h2>{post.id} | {post.title}</h2>
    <Link href={'/posts'}><a>Back</a></Link>
  </>
}

Post.getInitialProps = async ({query, res}) => {
  if (!res) {
    return {post: null}
  }
  const data = await fetch(`http://localhost:4200/posts/${query.id}`)
  const post = await data.json()
  return {post}
}