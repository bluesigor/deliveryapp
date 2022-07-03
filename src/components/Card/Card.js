import React from 'react'
import './Card.scss'
const Card = ({ name, price, logo, addItem, item, id, handleTotal }) => {
  return (
    <div className="card" key={id}>
      <h1 className="title"> {name} </h1>{' '}
      <img className="logo" src={logo} alt="logo" />
      <div className="details">
        <button
          className="btn__add"
          onClick={() => {
            handleTotal()
            addItem(item)
          }}
        >
          add to cart
        </button>
        <p>Price: {price}£</p>
      </div>
    </div>
  )
}

export default Card
