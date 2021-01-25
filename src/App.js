import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeProducts } from './reducers/productReducer'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Header from './components/Header'
import ProductIconList from './components/ProductIconList'
import ProductList from './components/Product'
import Sidebar from './components/Sidebar'
import { initProductTypes } from './reducers/productTypeReducer'

import './styles/app.css'


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeProducts())
    dispatch(initProductTypes())
  })

  const match = useRouteMatch('/:type')
  const type = match ? match.params.type : null

  return (
    <div className='main'>
      <div>
        <Header />
        <div className='main-container'>
          <Switch>
            <Route path='/:type'>
              <Sidebar />
              <ProductList type={type}/>
            </Route>
            <Route path='/'>
              <ProductIconList />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App;