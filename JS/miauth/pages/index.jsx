import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <Link href='/login'>
          <a>Login</a>
        </Link>
      </div>
      <div>
        <Link href='/register'>
          <a>Register</a>
        </Link>
      </div>
      <div>
        <a href='/api/logout'>Logout</a>
      </div>
    </>
  )
}
