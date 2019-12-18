import React from 'react'

const Pagination = ({ paginate }) => {
  const pageNumbers = []

  for (let index = 1; index < 10; index++) {
    pageNumbers.push(index)    
  }
  return (
      <ul>
        
        {pageNumbers.map(number => (
          <li key={number}>
            <button className="pageNumber" onClick={() => paginate(number)} >{number}</button>
          </li>
        ))}
      </ul>
      
  )
}

export default Pagination
