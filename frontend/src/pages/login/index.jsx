import React, {useContext, useState } from "react";
import {Link as RouterLink} from "react-router-dom";
import "./styles.css";
import {CartContext} from "../../components/cart/context";



export default function LogIn() {
  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.itemsCount;

  return (
    <div>
      <div className="layout top-bar">
        <div className="wrapper">
          <div className="section"><h3 className="title">Логотип</h3></div>
          <div className="section">
            <RouterLink className="link" to="/">Войти в аккаунт</RouterLink>
          </div>
      </div>
      </div>
      <div className="login-form">
        <label className="label"><b>Логин</b></label>
        <input 
          className="input-field"
          type="text" 
          placeholder="Введите Email"  
          autoFocus 
          name="login" 
          required
        />
        <label className="label"><b>Пароль</b></label>
        <input 
          className="input-field"
          type="text" 
          placeholder="Введите пароль" 
          name="login" 
          required
        />
        <button className="button"><RouterLink className="link" to="/products">Войти</RouterLink></button>
      </div>
    </div>
    
  );
}