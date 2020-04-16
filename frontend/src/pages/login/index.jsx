import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';



export default function LogIn() {
  return (
    <div>
      <label><b>Логин</b></label>
      <input 
        type="text" 
        placeholder="Enter Username"  
        autoFocus 
        name="login" 
        required
      />
      <label><b>Пароль</b></label>
      <input 
        type="text" 
        placeholder="Enter Username" 
        name="login" 
        required
      />
      <button><Link to="/products">Войти</Link></button>
    </div>
  );
}