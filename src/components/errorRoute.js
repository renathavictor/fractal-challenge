import React from 'react'
import Header from './Header'
import Footer from './Footer'

import '../style.scss'

const errorRoute = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="m-auto p-2">
        <h1 className="text-center">Ops, something went wrong!</h1>
        <h1 className="text-center">:/</h1>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default errorRoute 