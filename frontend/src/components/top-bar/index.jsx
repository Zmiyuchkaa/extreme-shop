import React, { useContext } from "react";
import {Link as RouterLink} from "react-router-dom";
import "./styles.css";
import {CartContext} from "../cart/context";
import LogIn from "../../pages/login"

export default function TopBar() {
  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.itemsCount;
  return <div className="layout top-bar">
    <div className="wrapper">
      <div className="section">Логотип</div>
      <div className="section">
        <RouterLink to="/">Войти в аккаунт</RouterLink>
      </div>
      <div className="section">
        <RouterLink to="/products">Товары</RouterLink> | {" "}
        <RouterLink to="/view-cart">Корзина ({numItems})</RouterLink>
      </div>
    </div>
  </div>
}
