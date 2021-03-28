import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authSelectors } from '@/redux/auth'
import { tokens } from '@/utils/tokens'

function ProtectedPage() {
  const user = useSelector(authSelectors.user)
  const isUserLoading = useSelector(authSelectors.isLoading)
  if (!user || isUserLoading) {
    return <h2>Loading...</h2>
  }
  return (
    <>
      <h3>Protected</h3>
      <div className='shadow-lg border rounded px-3 py-2'>
        <p>
          username: <b>{user.username}</b>
        </p>
        <p>
          phone: <b>{user.phone}</b>
        </p>
        <Link
          to='/password'
          className='underline text-red-600 hover:text-red-800'
        >
          Change Password
        </Link>
        <hr className='my-2' />
        <p className='break-all py-2 px-3 bg-red-200'>
          refreshToken: <b>{tokens.getRefreshToken()}</b>
        </p>
        <p className='break-all py-2 px-3 bg-green-200'>
          accessToken: <b>{tokens.getAccessToken()}</b>
        </p>
      </div>
    </>
  )
}

export default ProtectedPage
