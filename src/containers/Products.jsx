import React from 'react'
import '@styles/Products.scss'
import Product from '@components/Product'

const Products = ({ products }) => {
  return (
    <div className="products">
      <div className="products__items">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products