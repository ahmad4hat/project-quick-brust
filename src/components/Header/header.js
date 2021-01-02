import { Link } from "gatsby"
import PropTypes from "prop-types"
import Scss from './header.module.scss'
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className={Scss.Nav}>
      <div className={Scss.NavBrand}>
        <div className={Scss.NavBrandIcon}></div>
        <Link to="/" className={Scss.NavBrandName}>FarmE</Link>
      </div>
      <div className={Scss.NavMenu}>
        <ul className={Scss.NavMenuList}>
          <li className="Scss.NavMenuListItem">2</li>
          <li className="Scss.NavMenuListItem">2</li>
          <li className="Scss.NavMenuListItem">2</li>
        </ul>
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
