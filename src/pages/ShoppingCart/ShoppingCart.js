import React from 'react'
import { useGlobalContext } from '../../contexts/Context'
import './ShoppingCart.scss'
import BasketCart from '../../components/BasketCart/BasketCart'

function ShoppingCart() {
  const {
    basket,
    totalSum,
    handleSubmit,
    database,
    handleChangeInput,
  } = useGlobalContext()
  return (
    <form onSubmit={handleSubmit} className="shoppingcart">
      <main className="content">
        <div className="form" onSubmit={handleSubmit}>
          <div className="name__input">
            <label htmlFor="name"> Name: </label>
            <input
              onChange={(e) => handleChangeInput(e)}
              value={database.name}
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="email__input">
            <label htmlFor="email"> Email: </label>
            <input
              onChange={(e) => handleChangeInput(e)}
              value={database.email}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="phone__input">
            <label htmlFor="phone"> Phone: </label>
            <input
              onChange={(e) => handleChangeInput(e)}
              value={database.phone}
              type="tel"
              name="phone"
              id="phone"
            />
          </div>
          <div className="address__input">
            <label htmlFor="address"> Address: </label>
            <input
              onChange={(e) => handleChangeInput(e)}
              value={database.address}
              type="text"
              name="address"
              id="address"
            />
          </div>
        </div>
        <div className="basket">
          {basket.map((item) => {
            const { id, name, quantity, img } = item
            return (
              <BasketCart
                item={item}
                key={id}
                name={name}
                quantity={quantity}
                img={img}
              />
            )
          })}{' '}
        </div>{' '}
      </main>{' '}
      <div className="submit">
        <p> Total price: {totalSum}£ </p>{' '}
        <button type="submit" className="submit__btn">
          Submit{' '}
        </button>{' '}
      </div>{' '}
    </form>
  )
}

export default ShoppingCart
