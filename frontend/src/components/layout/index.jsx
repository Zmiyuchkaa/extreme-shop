import React from "react"
import TopBar from "../top-bar"
import "./styles.css"


export default function Layout({children, title}) {
  document.getElementsByTagName("title")[0].innerHTML = title;
  
  return (
    <div>
      <TopBar />
      <div className="wrapper">
      <h1>{title}</h1>
      {children}
    </div>
  </div>
  ) 
}