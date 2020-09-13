import Link from 'next/link'
import {MainLayout} from '../components/index'
import classes from '@/styles/error.module.scss'


export default function Page404() {
  return (
    <MainLayout title="404">
      <h1 className={classes.error}>
        404 | Go{' '}
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>
    </MainLayout>
  )
}
