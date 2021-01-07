import { Link } from "gatsby"
import PropTypes from "prop-types"
import Scss from "./header.module.scss"
import NavList from "./Navigation/navigationList"
import React, { useEffect, useState } from "react"
import MenuIcon from "./menu.svg"
import Toolbar from "./Navigation/toolbar/toolbar"
import Sidebar from "./Navigation/sidebar/sidebar"

const Header = ({ siteTitle }) => {
  const [scrolled, setScrolled] = useState(false)
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false)
  }

  const sideDrawerOpenHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible)
  }
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
      <div className={Scss.Nav}>
        <div className={Scss.NavBrand}>
          <div className={Scss.NavBrandIcon}></div>
          <Link to="/" className={Scss.NavBrandName}>
            {siteTitle}
          </Link>
        </div>

        <Toolbar />
        <div className={Scss.Visibility}>
          <Sidebar
            isOpen={sideDrawerIsVisible}
            close={sideDrawerClosedHandler}
          />

          <div onClick={sideDrawerOpenHandler}>
            <svg
              width="24"
              hight="24"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="black">
                <path
                  d="M18 12H9V10H18V12ZM18 7H0V5H18V7ZM18 2H0V0H18V2Z"
                  // fill="#2E3A59"
                  // stroke="blue"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
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
