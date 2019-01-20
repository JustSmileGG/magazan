import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="header__logo">
            <Link to="/">
              <img
                src="http://localhost:3000/img/21544496_images_4573504640.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="header__text">Magazan</div>
        </div>
        <div className="col-md-4">
          <div className="header__nav-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/catalog">Catalog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
