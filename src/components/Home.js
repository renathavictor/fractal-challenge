import React, { useState, useEffect } from 'react'
import { getBeers, getBeersPerPage } from '../services/api'

import Pagination from './Pagination'
import BeerList from './Beer/BeerList'
import './Beer/beer.scss'


const Home = () => {

  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [beersPerPage] = useState(12)

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

/*   
  -- USE FOR RENDER LINK WITH ALL BEERS
  const indexOfLastBeer = currentPage * beersPerPage
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage
  const currentBeer = beers.slice(indexOfFirstBeer, indexOfLastBeer) */

  // Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const prevsButton = (
    currentPage === 1 ? <button className="btnPage pageNumber" disabled>Previous</button> : <button className="btnPage pageNumber" onClick={() => paginate(currentPage-1)}>Previous</button>
    )
    
    const nextButton = (
      currentPage >= 10 ? <button className="btnPage pageNumber" disabled>Previous</button> : <button className="btnPage pageNumber" onClick={() => paginate(currentPage+1)}>Next</button>
  )

  return (
    <div>
      <BeerList beers={beers} loading={loading} />
      <nav className="pagination">
        {prevsButton}
        <Pagination paginate={paginate} currentPage={currentPage} />
        {nextButton}
      </nav>
    </div>
  )
}

export default Home