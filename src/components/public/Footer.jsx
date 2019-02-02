import React from "react";
import { Link, withRouter } from "react-router-dom";

const Footer = (props) => {
  const isCatalogPage = props.location.pathname === '/catalog';
  return(
  <div className={`footer ${isCatalogPage ? 'footer-relative' : ''}`} >
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="footer__name">
            Magazan
            <sup>©</sup> 2018
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="footer__list">
            <ul>
              <li>
                <Link to="#">Terms of Use</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Cookie Policy</Link>
              </li>
              <li>
                <Link to="#">Site Map</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)};

export default withRouter(Footer);
