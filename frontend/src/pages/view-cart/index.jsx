import React from "react"
import Layout from "../../components/layout"
import Cart from "../../components/cart"


export default function ProductsPage() {
  return (
    <Layout title="Cart">
      <Cart stripeToken="pk_test_Gw166heMsl4PMvVG5KubBBSx00mKdHG01c" />
    </Layout>
  );
}