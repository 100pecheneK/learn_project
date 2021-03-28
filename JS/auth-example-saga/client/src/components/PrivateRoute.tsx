import { authSelectors } from '@/redux/auth'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({
  children,
  ...rest
}: {
  children: React.ReactNode
  path: string
  exact: boolean
}) {
  const user = useSelector(authSelectors.user)
  const isLoading = useSelector(authSelectors.isLoading)
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
export default PrivateRoute
