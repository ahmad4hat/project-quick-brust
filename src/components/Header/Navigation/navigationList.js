import React from "react"
import Scss from "./navigationList.module.scss"
import NavItem from "./NavItem/navItem"

const navigationList = () => {
  return (
    <ul className={Scss.List}>
      {/* <li>2</li> */}
      <NavItem url="heelo">Home</NavItem>
      <NavItem url="heelo">About</NavItem>
      <NavItem url="heelo">Team</NavItem>
    </ul>
  )
}
export default navigationList
