import axios from 'axios'
require('express-async-errors')

const base_url = '/api/products'

const getAllProducts = async () => {
  const request = await axios.get(`${base_url}`)
  return request.data
}

const getSomeProducts = async (product) => {
  const request = await axios.get(`${base_url}/${product}`)
  return request.data
}


export default {
  getAllProducts: getAllProducts,
  getSomeProducts: getSomeProducts
}