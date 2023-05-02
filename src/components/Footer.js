import React from "react";
import footerlogo from "../images/footerlogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4">
          <div className="footer-icon">
            <img src={footerlogo} alt="logo" />
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4">
          <div className="footer-links">
            <h1>Important Links</h1>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/">
                <li>About Us </li>
              </Link>
              <Link to="/">
                <li>Places to visit</li>
              </Link>
              <Link to="/">
                <li>New Destinations</li>
              </Link>
              <Link to="/">
                <li>Login</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4">
          <div className="footer-address">
            <h1>Address</h1>
            <p>5th flora, 700/D kings road, green lane New York-1782</p>
            <p>+918263953653</p>
            <p>as2271614@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
