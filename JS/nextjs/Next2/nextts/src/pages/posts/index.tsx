import {useRouter} from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import {MainLayout} from '@components'
import {getPosts} from '@services/posts'
import {IPost} from '@interfaces/post'


interface IPostsPageProps {
  posts: IPost[]
}

export default function Posts({posts}: IPostsPageProps) {
  const router = useRouter()

  return (
    <MainLayout title="Posts">
      <Head>
        <title>Next | Posts</title>
      </Head>
      <h1>Posts</h1>
      {posts.length ? (
        <pre>{posts.map(post => (
          <li key={post.id}>
            <Link href='/posts/[id]' as={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}</pre>
      ) : (
        <p>Posts not found</p>
      )}
      <button onClick={() => {
        router.push('/')
      }}>
        Go home
      </button>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const res = await getPosts()
  const posts: IPost[] = await res.json()
  return {props: {posts}}
}
