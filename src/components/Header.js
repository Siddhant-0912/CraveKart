import { useState } from "react";

const Header = () => {

  const [btnName,setbtnName]=useState("Login");
  return (
    <div className="header">
      <div className="image-container">
        <img className="logo" src={new URL("../assets/logo.png", import.meta.url).href} alt="Logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="Login-Button" onClick={() => {
            btnName == "Login" ?setbtnName("Logout") : setbtnName("Login");
          }}
          >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
