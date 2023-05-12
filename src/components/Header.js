import React from "react";
import { useState } from "react";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  const[dropdown1,setDropdown1] = useState(false)
  // const[dropdown2,setDropdown2] = useState(false)
  const changedropdownstate = () => {
    setDropdown1(true)
  }
  return (
    <>
      <div className="container-fluid main-header">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="main-logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="main-tabs">
              <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/">
                          Destination
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="/"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Pages
                        </Link>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <Link className="dropdown-item" to="/">
                              Action
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/">
                              Another action
                            </Link>
                          </li>
                        
                          <li>
                            <Link className="dropdown-item" to="/">
                              Something else here
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="/"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onMouseOver={changedropdownstate}
                        >
                          Blogs
                        </Link>
                        {dropdown1 ? <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <Link className="dropdown-item" to="/">
                              Action
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/">
                              Another action
                            </Link>
                          </li>
                       
                          <li>
                            <Link className="dropdown-item" to="/">
                              Something else here
                            </Link>
                          </li>
                        </ul> : "" }
                      </li> 
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="container-fluid">
              <div className="row">
                <div className="nav-buttons">
                  <div className="col">
                    <li className="fa fa-phone">+918263953653</li>
                  </div>
                  <div className="col">
                    <div className="nav-icons">
                      <i className="fa fa-instagram" aria-hidden="true" />
                      <i className="fa fa-linkedin" aria-hidden="true" />
                      <i className="fa fa-facebook" aria-hidden="true" />
                      <i className="fa fa-google-plus" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      type="button"
                    >
                      Signup
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      type="button"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
