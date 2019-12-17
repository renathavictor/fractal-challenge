import React from 'react'

const Pagination = ({ beersPerPage, totalBeers, paginate }) => {
  const pageNumbers = []

  for (let index = 1; index < Math.ceil(totalBeers / beersPerPage); index++) {
    pageNumbers.push(index)    
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => paginate(number)} >{number}</button>
          </li>
        ))}
      </ul>
      
    </nav>
  )
}

export default Pagination
