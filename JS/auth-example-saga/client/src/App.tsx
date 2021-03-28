import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PublicPage from '@pages/PublicPage'
import PrivateRoute from '@components/PrivateRoute'
import Navbar from '@components/Navbar'
import LoginPage from '@pages/LoginPage'
import RegisterPage from '@pages/RegisterPage'
import ProtectedPage from '@pages/ProtectedPage'
import PasswordPage from '@pages/PasswordPage'
import { useTypedDispatch } from './redux/store'
import { authActionCreators } from './redux/auth'
import Alerts from '@components/Alerts'

export default function AuthExample() {
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(authActionCreators.getUser())
  }, [])
  return (
    <>
      <Router>
        <Navbar />
        <div className='container mt-5'>
          <Switch>
            <Route path={['/', '/public']} exact>
              <PublicPage />
            </Route>
            <Route path='/login' exact>
              <LoginPage />
            </Route>
            <Route path='/register' exact>
              <RegisterPage />
            </Route>
            <PrivateRoute path='/protected' exact>
              <ProtectedPage />
            </PrivateRoute>
            <PrivateRoute path='/password' exact>
              <PasswordPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
      <Alerts />
    </>
  )
}
