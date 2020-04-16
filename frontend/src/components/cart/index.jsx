import React, { useState, useEffect, useContext } from "react"
import { CartContext } from "./context"
import products from "../../data/products"

function formatPrice(price) {
  return `${(price * 0.01).toFixed(2)} грн.`
}

function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
}

export default function Cart({ stripeToken }) {
  const [stripe, setStripe] = useState(null)
  const ctx = useContext(CartContext)

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken))
  }, [stripeToken])

  function checkout() {
    stripe.redirectToCheckout({
      products: products.map(item => ({
        quantity: item.quantity,
        sku: item.sku
      }))
    })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quanity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {ctx.items.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>
                <img
                  src={`/images/${item.sku}.jpg`}
                  alt={item.name}
                  width={50}
                />
              </td>
              <td>{item.quantity}</td>
              <td>{formatPrice(item.price * item.quantity)}</td>
            </tr>
          ))}
          <tr>
            <td style={{ textAlign: "right" }} colspan={3}>
              Total:
            </td>
            <td>{formatPrice(totalPrice(ctx.items))}</td>
          </tr>

          <tr>
            <td style={{ textAlign: "right" }} colspan={4}>
              <button onClick={checkout}>Завершить покупку</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}