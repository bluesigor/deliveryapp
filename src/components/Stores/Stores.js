import React from 'react'
import { useGlobalContext } from '../../contexts/Context'
import Store from '../Store/Store'
import './Stores.scss'

function Stores() {
  const { restaurant, menuHandler } = useGlobalContext()

  return (
    <section className="shops">
      <header> Shops: </header>{' '}
      {restaurant.map((item) => {
        const { id, name, category } = item
        return (
          <Store
            category={category}
            menuHandler={menuHandler}
            key={id}
            name={name}
          />
        )
      })}{' '}
    </section>
  )
}

export default Stores
