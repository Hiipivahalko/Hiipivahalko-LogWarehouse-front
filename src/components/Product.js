import React, { useState } from 'react'
//import { FixedSizeList as List } from 'react-window'
import { useSelector } from 'react-redux'
import '../styles/product.css'

const SmallInfo = ({ product }) => (
  <div>
    <li key={product.id} className='product-container-item-small'>
      <p><b>{product.manufacturer}</b>
          , {product.name}, {product.type}, {product.price}$
          <span> </span>
        <span className={product.availability.toLowerCase()}> </span>
      </p>
    </li>
  </div>
)

const BigInfo = ({ product }) => (
  <div>
    <li key={product.id} className='product-container-item-small'>
      <table>
        <tbody>
          <tr>
            <td><span className='info'>Manufacturer: </span></td>
            <td><span><b>{product.manufacturer}</b></span></td>
            <td><span className='info'>type: </span></td>
            <td><span><b>{product.type}</b></span></td>
          </tr>
          <tr>
            <td><span className='info'>Name: </span></td>
            <td><span><b>{product.name}</b></span></td>
            <td><span className='info'>price: </span></td>
            <td><span>{product.price}$</span></td>
          </tr>
          <tr>
            <td><span className='info'>Availability: </span></td>
            <td><span>{product.availability}</span></td>
            <td><span className={product.availability.toLowerCase()}> </span></td>
          </tr>
        </tbody>
      </table>
    </li>
  </div>
)

const Product = ({ product }) => {

  const [showMore, setShowMore] = useState(false)

  const hide = { display: !showMore ? '' : 'none' }
  const show = { display: showMore ? '' : 'none' }

  return (
    <div>
      <div style={hide} onClick={() => setShowMore(true)}><SmallInfo product={product} /></div>
      <div style={show} onClick={() => setShowMore(false)}><BigInfo product={product} /></div>
    </div>
  )
}

const Filter = ({ handleFilter, filter }) => {

  const style = { display: filter === '' ? 'none' : '' }

  return (
    <div>
      <form onSubmit={handleFilter}>
        <input type='text' placeholder='Search...' name='search' />
        <button className='input-button' >search</button>
      </form>
      <div style={style}><button className='red'>clear search</button></div>
    </div>
  )
}

const ProductList = ({ type }) => {

  const [filter, setFilter] = useState('')

  const products = useSelector(state => {
    return filter === '' ? state.products[type] :
      state.products[type].filter(product => (product.name.toLowerCase().includes(filter) || product.manufacturer.toLowerCase().includes(filter)))
  })

  if (!products || products.length === 0 || !products[0].type || !products[0].availability) {
    return null
  }

  const handleFilter = (event) => {
    event.preventDefault()
    console.log('filter cliked')
    console.log(event.target.search.value)
    setFilter(event.target.search.value)
  }

  /*const Row = ({ index, key, style }) => (
    <div>
      <div key={key} style={style} className='product-container-item-small'>
        <Product product={products[index]} key={products[index].id} />
      </div>
    </div>
  )*/

  return (
    <div >
      <h2 className='product-container-header'>Products</h2>
      <ul className='product-container'>
        {products.map(product =>
          <Product product={product} key={product.id} />
        )}
      </ul>
    </div>
  )
  /*return (
    <div >
      <h2 className='product-container-header'>Products</h2>
      <div>
        <List 
          itemCount={products.length}
          height={1300}
          width={700}
          itemSize={100}
        >
          {Row}
        </List>
      </div>
    </div>
  )*/
}

export default ProductList