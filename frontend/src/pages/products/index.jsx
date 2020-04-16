import React, { useState } from "react"
import Layout from "../../components/layout"
import Store from "../../components/store"
import "./styles.css";


export default function ProductsPage() {

  return (
    <Layout>
      <h1 className="title">Наша продукция</h1>
      <Store />
    </Layout>
  );
}