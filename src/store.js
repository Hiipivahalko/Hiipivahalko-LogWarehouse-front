import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import productReducer from './reducers/productReducer'
import productTypeReducer from './reducers/productTypeReducer'

const reducer = combineReducers({
  products: productReducer,
  productTypes: productTypeReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store