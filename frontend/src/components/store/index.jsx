import React, {useContext} from "react"
import products from "../../data/products"
import {CartContext} from "../cart/context"
import "./styles.css";

function formatPrice(price) {
  return `${(price * 0.01).toFixed(2)} грн.`
}


export default function Store() {
  const cartCtx = useContext(CartContext)
  
  
  return( 
    <div className="products-block">
      {products.map(product => (
        <div className="product-cards">
          <div>
            <img 
              src={ `/images/${product.sku}.jpg`} 
              alt={product.name} 
              width={200}
              height={100}
            />
          </div>
          <div>{product.type}</div>
          <div>{product.name}</div>
          <div>{formatPrice(product.price)}</div>
          <div>
            <button 
              onClick={() => cartCtx.addToCart(product)}
              className="button"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
)}