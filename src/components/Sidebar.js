import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './../styles/sidebar.css'

const Menu = () => {
  const prodTypes = useSelector(state => state.productTypes)

  return (
    <ul className='left-sidebar'>
      <li className='left-sidebar-item'>
        <Link to='/'>Home</Link>
      </li>
      {prodTypes.map(type =>
        <Link to={`/${type}`} key={type}>
          <li key={type} className='left-sidebar-item'>{type}</li>
        </Link>
      )}
    </ul>
  )
}

const Sidebar = () => {
  return (
    <div>
      <Menu />
    </div>
  )
}

export default Sidebar