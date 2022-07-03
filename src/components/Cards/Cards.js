import React from 'react'
import { useGlobalContext } from '../../contexts/Context'
import Card from '../Card/Card'
import './Cards.scss'

function Cards() {
  const { handleSum, addItem, menu, handleTotal } = useGlobalContext()
  return (
    <section className="cards">
      {' '}
      {menu.map((item) => {
        const { name, price, id, img } = item
        return (
          <Card
            price={price}
            handleSum={handleSum}
            logo={img}
            item={item}
            addItem={addItem}
            handleTotal={handleTotal}
            key={id}
            id={id}
            name={name}
          />
        )
      })}{' '}
    </section>
  )
}

export default Cards
