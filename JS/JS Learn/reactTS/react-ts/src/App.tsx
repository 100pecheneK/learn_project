import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import AboutPage from './pages/AboutPage'
import withFadeIn from './hooks/withFadeIn'
import FadeIn from 'react-fade-in'
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={'/'} component={withFadeIn(TasksPage)} />
        <Route exact path={'/about'} component={withFadeIn(AboutPage)} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
