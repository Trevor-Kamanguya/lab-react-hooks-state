import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  function handleToggleDarkMode() {
    setDarkMode(!darkMode)
  }

  function handleAddToCart(product) {
    setCart([...cart, product])
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>

      {/* Dark Mode */}
      <DarkModeToggle
        darkMode={darkMode}
        onToggle={handleToggleDarkMode}
      />

      {/* Filter */}
      <label>Filter by Category: </label>
      <select
        role="combobox"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Products */}
      <ProductList
        category={category}
        onAddToCart={handleAddToCart}
      />

      {/* Cart */}
      <Cart cart={cart} />
    </div>
  )
}

export default App