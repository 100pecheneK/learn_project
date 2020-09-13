import {useRouter} from 'next/router'
import {MainLayout} from '@components'


export default function About() {
  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }
  return (
    <MainLayout title="About">
      <h1>About</h1>
      <button onClick={goHome}>Go home</button>
    </MainLayout>
  )
}


