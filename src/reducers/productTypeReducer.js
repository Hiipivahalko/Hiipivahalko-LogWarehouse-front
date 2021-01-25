import productService from '../services/products'

const productTypeReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_TYPES':
      return action.data
    default:
      return state
  }
}

export const initProductTypes = () => {
  return async dispatch => {
    const types = await productService.getAllProductTypes()
    dispatch({
      type: 'INIT_TYPES',
      data: types
    })
  }
}

export default productTypeReducer