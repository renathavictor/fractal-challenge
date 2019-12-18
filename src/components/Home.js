import React, { useState, useEffect } from 'react'
import { getBeers, getBeersPerPage } from '../services/api'

import Pagination from './Pagination'
import CardList from './Beer/CardList'
import './Beer/beer.scss'


const CardBox = () => {

  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function loadBeers() {
      setLoading(true)
      //const response = await getBeers()
      const response = await getBeersPerPage(currentPage)
      setBeers(response.data)
      setLoading(false)
    }
    loadBeers()
  }, [currentPage])

/*   const indexOfLastBeer = currentPage * beersPerPage
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage
  const currentBeer = beers.slice(indexOfFirstBeer, indexOfLastBeer) */

  // Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const prevsButton = (
    currentPage === 1 ? <button className="btnPage" disabled>Previous</button> : <button className="btnPage" onClick={() => paginate(currentPage-1)}>Previous</button>
    )
    
    const nextButton = (
      currentPage === 9 ? <button className="btnPage" disabled>Previous</button> : <button className="btnPage" onClick={() => paginate(currentPage+1)}>Next</button>
  )



  return (
    <div>
      <CardList beers={beers} loading={loading} />
      <nav className="pagination">
        {prevsButton}
        <Pagination paginate={paginate} />
        {nextButton}
      </nav>
    </div>
  )
}

export default CardBox