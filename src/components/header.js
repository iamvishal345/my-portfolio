import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="header" role="banner">
    <div className="navbar-fixed">
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <a href="index.html" className="brand-logo">
              MU Material
            </a>
            {/* <!-- <a href="index.html" className="brand-logo"><img src="img/logo.jpeg" alt="logo img"></a>  --> */}
            <ul className="right hide-on-med-and-down custom-nav menu-scroll">
              <li>
                <a href="#about">About Me</a>
              </li>
              {/* <li>
                <a href="#resume">Resume</a>
              </li> */}
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
            {/* <!-- For Mobile View --> */}
            <ul id="slide-out" className="side-nav menu-scroll">
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
            <a href="#" data-activates="slide-out" className="button-collapse">
              <i className="mdi-navigation-menu"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
