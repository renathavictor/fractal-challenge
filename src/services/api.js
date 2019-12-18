import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.punkapi.com/v2/'
})

export async function getBeers() {
  return await api.get('beers')
    .then(res => res)
    .catch(err => console.log(err));
}

export async function getBeersPerPage(page) {
  return await api.get(`beers?page=${page}&per_page=12`)
    .then(res => res)
    .catch(err => console.log(err));
}

export async function getBeer(id) {
  return await api.get(`beers/${id}`)
    .then(res => res)
    .catch(err => console.log(err));
}