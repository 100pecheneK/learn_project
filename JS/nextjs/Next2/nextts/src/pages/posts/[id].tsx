import {useRouter} from 'next/router'
import {MainLayout} from '@components'
import {getPost} from '@services/posts'
import {GetServerSidePropsContext} from 'next'
import {IPost} from '@interfaces/post'


interface IPostPageProps {
  post: IPost
}

export default function Post({post}: IPostPageProps) {
  const router = useRouter()

  return (
    <MainLayout title={post.title}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => {
        router.push('/posts')
      }}>{'<'} Back
      </button>
    </MainLayout>
  )
}

interface IPostNextPageContext extends GetServerSidePropsContext {
  params: {
    id: string
  }
}

export async function getServerSideProps({params}: IPostNextPageContext) {
  const res = await getPost(params.id)
  const post: IPost = await res.json()
  return {props: {post: post}}
}