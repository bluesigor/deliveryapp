import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
const ContextAPI = createContext()
export const ContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({ msg: '', show: false })
  const [menu, setMenu] = useState([])
  const [totalSum, setTotalSum] = useState(0)
  const [basket, setBasket] = useState([])
  const [allItems, setAllItems] = useState(0)
  const [restaurant, setRestaurant] = useState([])
  const [database, setDatabase] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    order: '',
  })

  useEffect(() => {
    const productsURL = 'http://localhost:3002/products'
    fetch(productsURL)
      .then((res) => res.json())
      .then((products) => {
        setRestaurant(products.data)
        setMenu(products.menuData)
      })
  }, [])
  const handleChangeInput = (e) => {
    const newdata = {
      ...database,
      order: {
        orders: basket
          .map((item) => `${item.name}: ${item.quantity}`)
          .join(','),
        totalSum: totalSum,
      },
    }
    newdata[e.target.id] = e.target.value
    setDatabase(newdata)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/customer', database)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    setDatabase({
      name: '',
      email: '',
      phone: '',
      address: '',
      order: '',
    })
    setBasket([])
    setAlert({ msg: 'Your order was submited', show: true })
    setAllItems(0)
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setAlert({ msg: '', show: false })
    }, 2000)
    return () => {
      clearTimeout(timerId)
    }
  }, [allItems, database])

  const menuHandler = (category) => {
    const tempMenu = menu.filter((item) => item.category === category)
    return setMenu(tempMenu)
  }
  const handleTotal = () => {
    setAlert({ msg: 'Item was added', show: true })
    setAllItems((prev) => prev + 1)
  }
  useEffect(() => {
    const tempItem =
      basket.length > 0
        ? basket
            .map((item) => item.price * item.quantity)
            .reduce((acc, item) => acc + item)
        : 0
    setTotalSum(tempItem)
  }, [basket])
  const addItem = (product) => {
    const exist = basket.find((item) => item.id === product.id)
    if (exist) {
      setBasket(
        basket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      )
    } else {
      setBasket([...basket, { ...product, quantity: 1 }])
      console.log(basket.map((item) => item.name).join(','))
    }
  }
  const removeItem = (product) => {
    const exist = basket.find((item) => item.id === product.id)
    if (exist) {
      setBasket(
        basket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      )
    } else {
      setBasket([...basket, { ...product, quantity: 1 }])
    }
  }
  return (
    <ContextAPI.Provider
      value={{
        database,
        alert,
        restaurant,
        menuHandler,
        menu,
        handleTotal,
        addItem,
        removeItem,
        totalSum,
        basket,
        allItems,
        handleChangeInput,
        handleSubmit,
      }}
    >
      {' '}
      {children}{' '}
    </ContextAPI.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(ContextAPI)
}
