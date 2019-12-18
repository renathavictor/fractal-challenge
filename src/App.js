import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout'
import BeerDetails from './components/Beer/BeerDetails'
import errorRoute from './components/errorRoute'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="/beer/:name" exact component={BeerDetails} />
        <Route path="*" component={errorRoute} />
      </Switch>
    </Router>
  )
}

export default App
