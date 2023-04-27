/* eslint-disable jsx-a11y/anchor-is-valid */
import "./header.scss";
import logo from "../../assets/images/logo.png";
import searchLogo from "../../assets/images/Search.png";
const Header = () => {
  return (
    <header>
      <div className="headcontiner">
        <h2 className="nav-brend">
          <div className="logoo">
            {" "}
            <img className="logoo" alt="" src={logo} />
          </div>
          <span className="logotext">foodwaGon</span>
        </h2>
        <div className="deleveryadress">
          <div className="deleveryto">Deliver to:</div>
          <div className="current"></div>
          <div className="icon">
            {" "}
            <img alt="" src="map-marker-alt.png" />
          </div>
          <div className="text">
            Current Location Mohammadpur Bus Stand, Dhaka
          </div>
        </div>
        <div className="menu">
            
          <a href="#" className="menu-link">
            <b>HOME</b>
          </a>
          <a href="#" className="menu-link">
            <b>ABOUT</b>
          </a>
          <a href="#" className="menu-link">
            <b>SERVICE</b>
          </a>
          <a href="#" className="menu-link">
            <b>CONTACT</b>
          </a>
        </div>
        <div className="searchloginbutton">
          <div className="search">
            <div className="icon">
              {" "}
              <img alt="" src={searchLogo} />
            </div>
            <div className="searchtext">Search Food</div>
          </div>
          <button className="login">
            <div className="icon">
              {" "}
              <img alt="" src="user.png" />
            </div>
            <div className="logintext">Login</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
