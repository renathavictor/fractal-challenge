import React from 'react'

import Header from './Header'
import CardList from './Beer/CardList'
import Footer from './Footer'

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <CardList />
      <Footer />
    </React.Fragment>
  )
}

export default Layout
