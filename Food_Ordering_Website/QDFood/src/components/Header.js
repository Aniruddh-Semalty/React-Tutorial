import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img
            id="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="navbar">
          <div className="navbar-items">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Name</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  export default Header;