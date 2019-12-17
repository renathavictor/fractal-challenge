import React from 'react'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
