import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from  "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const onlineStatus=useOnlineStatus();
  return (<>
  
    <div className="header">
      <div className="logo">
        <img id="logo" src={LOGO_URL} />
      </div>
      <div className="navbar">
        <div className="navbar-items">
          <ul>
            <li>Online Status:{onlineStatus?"✅":"❌"}</li>
            <li ><Link to ="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
    </>
  );
};
export default Header;
