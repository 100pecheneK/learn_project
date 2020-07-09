import {MainLayout} from '../../components/MainLayout'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

export default function Post({post: serverPost}) {
  const [post, setPost] = useState(serverPost)
  const router = useRouter()
  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:4200/posts/${router.query.id}`)
      const data = await res.json()
      setPost(data)
    }

    if (!serverPost) {
      load()
    }
  }, [])
  if (!post) {
    return <MainLayout><p>Loading...</p></MainLayout>
  }
  return <MainLayout>
    <h1>{post.id} | {post.title}</h1>
    <p>{post.body}</p>
    <Link href={'/posts'}><a>Back to Posts</a></Link>
  </MainLayout>
}

Post.getInitialProps = async ({query, req}) => {
  if (!req) {
    return {post: null}
  }
  const res = await fetch(`${process.env.API_URL}/posts/${query.id}`)
  const post = await res.json()
  return {post}
}

// Это для пре рендеринга (до отправки на клиент)
// export async function getServerSideProps({query, req}) {
//   const res = await fetch(`http://localhost:4200/posts/${query.id}`)
//   const post = await res.json()
//   return {props: {post}}
// }