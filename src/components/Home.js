import React, { useState, useEffect } from 'react'
import { getBeers } from '../services/api'

import Pagination from './Pagination'
import CardList from './Beer/CardList'
import './Beer/beer.scss'


const CardBox = () => {

  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [beersPerPage] = useState(6)

  useEffect(() => {
    async function loadBeers() {
      setLoading(true)
      const response = await getBeers()
      setBeers(response.data)
      setLoading(false)
    }
    loadBeers()
  }, [])

  const indexOfLastBeer = currentPage * beersPerPage
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage
  const currentBeer = beers.slice(indexOfFirstBeer, indexOfLastBeer)

  // Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <h1 className="primary-color text-center">List of Beers</h1>
      <CardList beers={currentBeer} loading={loading} />
      <Pagination beersPerPage={beersPerPage} totalBeers={beers.length} paginate={paginate} />
    </div>
  )
}

export default CardBox