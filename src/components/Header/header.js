import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Scss from "./header.module.scss"
import NavList from "./Navigation/navigationList"
import MenuIcon from "./menu.svg"
import Toolbar from "./Navigation/toolbar/toolbar"
import Sidebar from "./Navigation/sidebar/sidebar"
import { motion, useMotionValue } from "framer-motion"

const Header = ({ siteTitle }) => {
  const [scrolled, setScrolled] = useState(false)
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)
  const path = useMotionValue(
    "M18 12H9V10H18V12ZM18 7H0V5H18V7ZM18 2H0V0H18V2Z"
  )

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false)
  }

  const sideDrawerOpenHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible)
  }
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)
  // }, [window])
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
            <motion.svg
              style={{
                origin: 0.5,
              }}
              width="24"
              hight="24"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -500 }}
              whileHover={{ scale: 1.3 }}
            >
              <g fill="black">
                <motion.path
                  d={path}
                  // animate={{ pathLength: 2 }}
                  // fill="#2E3A59"
                  // stroke="blue"
                />
              </g>
            </motion.svg>
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
