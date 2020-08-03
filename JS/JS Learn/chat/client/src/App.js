import React from 'react'

import {Auth, Home} from './pages'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {Switch} from 'react-router'


function App({isAuth}) {
  return (
    <div className='wrapper'>

      <Switch>
        <Route exact path={['/login', '/register', '/register/verify']} component={Auth}/>
        <Route exact path={'/'} render={() => (
          isAuth ? <Home/> : <Redirect to={'/login'}/>
        )}/>
        {/*<Redirect to={'/'}/>*/}
      </Switch>
    </div>
  )
}

export default connect(({user}) => ({isAuth: user.isAuth}))(App)
