import React, {useEffect} from 'react'

import {Auth, Home} from './pages'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {Switch} from 'react-router'
import {userActions} from './redux/actions'


function App({isAuth, loading, fetchUserData, logout}) {

  useEffect(() => {
    if (isAuth && loading) {
      fetchUserData()
    }
  }, [fetchUserData, isAuth, loading])

  return (
    <div className='wrapper'>
      <button style={{position: 'fixed'}} onClick={logout}>CLEAR ALL</button>
      <Switch>
        <Route path={['/login', '/register', '/register/verify']} component={Auth}/>

        <Route path={['/', '/dialog/:id']} render={() => (
          isAuth ? <Home/> : <Redirect to={'/login'}/>
        )}/>
      </Switch>
    </div>
  )
}

export default connect(({user}) => ({isAuth: user.isAuth, loading: user.loading}), userActions)(App)
