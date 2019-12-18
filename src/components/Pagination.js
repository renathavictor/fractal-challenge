import React from 'react'

import '../style.scss'

const Pagination = ({ currentPage, paginate }) => {
  const pageNumbers = []
  let active = ''

  for (let index = 1; index <= 10 ; index++) {
    pageNumbers.push(index)    
    active = currentPage === index ? 'active' : ''
  }

  return (
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <button className={`pageNumber ${active}`} onClick={() => paginate(number)} >{number}</button>
          </li>
        ))}
      </ul>
      
  )
}

export default Pagination
