import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.punkapi.com/v2/'
})

export async function getBeers() {
  return await api.get('beers');
}

export async function getBeer(id) {
  console.log("AQUI NO GET BEER"+id)
  return await api.get(`beers/${id}`);
}