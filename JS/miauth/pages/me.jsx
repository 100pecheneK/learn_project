import React from 'react'
import { useRouter } from 'next/router'
import cookie from 'cookie'
import User from '../models/User'
import database from '../core/Database/database'
const jsonwebtoken = require('jsonwebtoken')
import auth from '../utils/auth'

export default function Me({ user }) {
  const router = useRouter()
  if (!user) {
    router.push('/login')
  }
  return <pre>{JSON.stringify(user, null, 4)}</pre>
}

export const getServerSideProps = async ctx => {
  const redirect = () => {
    if (ctx.res) {
      ctx.res.setHeader('location', '/login')
      ctx.res.statusCode = 302
      return { props: {} }
    }
  }

  try {
    const session = await auth.getSession(ctx.req)

    const user = await database
      .findById({
        Model: User,
        id: session.userId,
        select: '-password',
      })
    console.log('user', user)
    if (!user) {
      redirect()
    }
    return { props: { user } }
  } catch (e) {
    console.log(e)
    redirect()
  }
}
