import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../assets//Golden-Support-Services-Black.png";

const Header = ({ setDarkMode, darkMode }: any) => {
  return (
    <body>
      <header id="header">
        <div className="container">
          <div className="header">
            <img src={logo} alt="" />
            <div className="pages">
              <NavLink
                style={{
                  background: darkMode ? "transparent" : "",
                  color: darkMode ? "#00dd00" : "",
                }}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                style={{
                  background: darkMode ? "transparent" : "",
                  color: darkMode ? "#00dd00" : "",
                }}
                to="/admin"
              >
                Admin
              </NavLink>
              <label className="switch">
                <input
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  type="checkbox"
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </header>
    </body>
  );
};

export default Header;
