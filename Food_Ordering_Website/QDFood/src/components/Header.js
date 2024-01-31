import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img id="logo" src={LOGO_URL} />
      </div>
      <div className="navbar">
        <div className="navbar-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Name</li>
            <li>Cart</li>
            <button
              className="login-btn"
              onClick={() => {
                loginButton === "Login"
                  ? setLoginButton("Logout")
                  : setLoginButton("Login");
              }}
            >
              {loginButton}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
