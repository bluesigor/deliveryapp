import React from 'react'
import { Link } from 'react-router-dom'
import { TbMinusVertical } from 'react-icons/tb'
import '../Navbar/Navbar.scss'
import { useGlobalContext } from '../../contexts/Context'

function Navbar() {
  const { allItems, alert } = useGlobalContext()
  return (
    <nav className="navbar">
      <ul className="links">
        <li>
          <Link to={'/shops'} className="link">
            Shop{' '}
          </Link>{' '}
        </li>{' '}
        <TbMinusVertical className="line" />
        <li>
          <Link to={'/shoppingcart'} className="link">
            Shopping Cart{' '}
          </Link>{' '}
        </li>{' '}
      </ul>{' '}
      {alert.show ? (
        <p className="notification"> {alert.msg} </p>
      ) : (
        <p>
          Total: <strong> {allItems} </strong>{' '}
        </p>
      )}{' '}
    </nav>
  )
}

export default Navbar
