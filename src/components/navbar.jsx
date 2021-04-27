import { Link } from "gatsby"
import React from "react"
import { NAVLIST } from "../constant"

const NavBar = ({ siteTitle }) => (
  <div className="dashboard">
    <div className="user">
      <img
        src={require("../images/profile.jpg")}
        height="100"
        alt=""
        srcset=""
      />
      <h3>Vishal Sharma</h3>
      <p>MERN Stack Developer</p>
    </div>
    <div className="links">
      {NAVLIST.map((navLink, i) => (
        <Link to={`/${navLink.key}`} key={i} className="link">
          <img
            src={require(`../images/${navLink.key}.svg`)}
            alt={navLink.name}
          />
          <h3>{navLink.name}</h3>
        </Link>
      ))}
    </div>
    <button className="resume">
      <img src={require("../images/download.svg")} alt="Download" />
      <h3>View My Resume</h3>
    </button>
  </div>
)

export default NavBar
