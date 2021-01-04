import { Link } from "gatsby"
import PropTypes from "prop-types"
import Scss from "./header.module.scss"
import NavList from "./Navigation/navigationList"
import React, { useEffect, useState } from "react"

const Header = ({ siteTitle }) => {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 40) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })
  return (
    <header className={[Scss.Header, scrolled ? Scss.Sticky : ""].join(" ")}>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
