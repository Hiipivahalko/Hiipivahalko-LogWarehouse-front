import React from 'react'
import './../styles/sidebar.css'

const Sidebar = ({ prodTypes, handleClick }) => {
  console.log('render')
  return (
    <div>
      <ul className='left-sidebar'>
        {prodTypes.map(type =>
          <li key={type} className='left-sidebar-item' onClick={handleClick}>
            {type}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Sidebar