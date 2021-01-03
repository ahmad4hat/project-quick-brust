import { Link } from "gatsby"
import PropTypes from "prop-types"
import Scss from "./header.module.scss"
import NavList from "./Navigation/navigationList"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: "6rem",
    }}
  >
    <nav className={Scss.Nav}>
      <div className={Scss.NavBrand}>
        <div className={Scss.NavBrandIcon}></div>
        <Link to="/" className={Scss.NavBrandName}>
          {siteTitle}
        </Link>
      </div>

      <div className={Scss.NavMenu}>
        <NavList />
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
