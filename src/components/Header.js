import React from 'react'

import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="header">
      <div>
        <Link to="/">
          <h1 className="primary-color text-center p-1">List of Beers</h1>
        </Link>
      </div>
    </nav>
  )
}

export default Header
