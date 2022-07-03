import React from 'react'
import './Store.scss'

function Store({ menuHandler, category, name, img }) {
  return (
    <div className="store" onClick={() => menuHandler(category)}>
      <h1 className="title"> {name} </h1>
    </div>
  )
}

export default Store
