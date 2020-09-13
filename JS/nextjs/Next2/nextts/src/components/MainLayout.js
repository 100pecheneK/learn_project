import Head from 'next/head'
import Link from 'next/link'


export default function MainLayout({children, title}) {
  return (
    <>
      <Head>
        <title>Next | {title}</title>
      </Head>
      <nav>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
        <p>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </p>
        <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
      </nav>
      <main>{children}</main>
    </>
  )
}
