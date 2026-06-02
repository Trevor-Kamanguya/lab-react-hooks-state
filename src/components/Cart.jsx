import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map((item, i) => (
        <p key={i}>{item.name} is in your cart</p>
      ))}
    </div>
  )
}

export default Cart