import React, { useContext } from "react";
import {Link} from "react-router-dom";
import "./styles.css";
import {CartContext} from "../cart/context";

export default function TopBar() {
  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.itemsCount;
  return <div className="layout top-bar">
    <div className="wrapper">
      <div className="section">My store</div>
      <div className="section">
        <Link to="/">Products</Link> | {" "}
        <Link to="/view-cart">ViewCart ({numItems})</Link>
      </div>
    </div>
  </div>
}
