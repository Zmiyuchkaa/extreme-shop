import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {BrowserRouter, Switch, Route} from "react-router-dom"
import CartProvider from "./components/cart/context"
import ProductsPage from "./pages/products"
import ViewCartPage from "./pages/view-cart"
import LogIn from "./pages/login"

import "./styles.css"

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/view-cart" component={ViewCartPage} />
      </Switch>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

