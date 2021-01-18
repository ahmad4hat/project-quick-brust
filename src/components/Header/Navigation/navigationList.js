import React from "react"
import Scss from "./navigationList.module.scss"
import NavItem from "./NavItem/navItem"

const navigationList = () => {
  return (
    <nav>
      <ul className={Scss.List}>
        {/* <li>2</li> */}
        <NavItem url="/">Home</NavItem>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/team">Team</NavItem>
      </ul>
    </nav>
  )
}
export default navigationList
