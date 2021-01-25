import productService from '../services/products'

const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_PRODUCTS':
      return action.data
    default:
      return state
  }
}

export const initializeProducts = () => {
  return async dispatch => {
    const products = await productService.getAllProducts()
    dispatch({
      type: 'INIT_PRODUCTS',
      data: products
    })
  }
}

export default productReducer

