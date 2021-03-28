import { authActionCreators, authSelectors } from '@/redux/auth'
import { useTypedDispatch } from '@/redux/store'
import classNames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

function AuthButton({ className }: { className: string }) {
  let history = useHistory()
  const dispatch = useTypedDispatch()
  const user = useSelector(authSelectors.user)
  const isLoading = useSelector(authSelectors.isLoading)
  return isLoading ? (
    <p className={className}>Loading</p>
  ) : user ? (
    <>
      <Link
        to='/protected'
        className={classNames(className, 'bg-green-300 hover:bg-green-400')}
      >
        Protected Page
      </Link>
      <button
        className={classNames(className, 'bg-red-200 hover:bg-red-300')}
        onClick={async () => {
          dispatch(authActionCreators.logout())
          history.push('/')
        }}
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link
        to='/login'
        className={classNames(
          className,
          'bg-blue-400 text-white hover:bg-blue-500'
        )}
      >
        Login
      </Link>
      <Link
        to='/register'
        className={classNames(
          className,
          'bg-blue-400 text-white hover:bg-blue-500'
        )}
      >
        Register
      </Link>
    </>
  )
}

export default AuthButton
