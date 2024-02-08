import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from  "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const onlineStatus=useOnlineStatus();
  return (<>
    <div className="flex justify-between items-center border-2">
      <div className="logo">
        <img id="logo" src={LOGO_URL} className="w-24" />
      </div>
      <div className="navbar">
        <div>
          <ul className="flex">
            <li className="mx-4">Online Status:{onlineStatus?"✅":"❌"}</li>
            <li className="mx-4" ><Link to ="/">Home</Link></li>
            <li className="mx-4"><Link to="/about">About</Link></li>
            <li className="mx-4"><Link to="/contact">Contact</Link></li>
            <li className="mx-4">Cart</li>
            <button
              className="mx-4"
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
