import React, {useEffect} from 'react'

import {Auth, Home} from './pages'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {Switch} from 'react-router'
import {userActions} from './redux/actions'


function App({isAuth, data, loading, fetchUserData}) {

  useEffect(() => {
    if (isAuth && loading && !data) {
      fetchUserData()
    }
  }, [fetchUserData, isAuth, loading, data])

  return (
    <div className='wrapper'>
      <Switch>
        <Route path={['/login', '/register', '/register/verify']} component={Auth}/>

        <Route path={['/', '/dialog/:id']} render={() => (
          isAuth ? <Home/> : <Redirect to={'/login'}/>
        )}/>
      </Switch>
    </div>
  )
}

export default connect(({user}) => user, userActions)(App)
