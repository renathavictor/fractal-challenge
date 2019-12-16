import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout'
import CardDetails from './components/Beer/CardDetails'
import errorRoute from './components/errorRoute'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="/beer/:id" exact component={CardDetails} />
        <Route path="*" component={errorRoute} />
      </Switch>
    </Router>
  )
}

export default App
