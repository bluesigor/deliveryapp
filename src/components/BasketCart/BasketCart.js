import React from 'react'
import { ImArrowUp2 } from 'react-icons/im'
import { ImArrowDown2 } from 'react-icons/im'
import { useGlobalContext } from '../../contexts/Context'
import './BasketCart.scss'
function BasketCart({ id, name, quantity, img, item }) {
  const { addItem, removeItem } = useGlobalContext()
  return (
    <div className="cart" key={id}>
      <img src={img} alt="logo" className="logo" />
      <div className="title">
        <h3> {name} </h3>{' '}
        <div className="qty">
          <div className="add__remove__btn">
            <ImArrowUp2
              onClick={() => {
                addItem(item)
              }}
            />
            <ImArrowDown2 onClick={() => removeItem(item)} />
          </div>
          <p>{quantity}</p>
        </div>
      </div>
    </div>
  )
}

export default BasketCart
