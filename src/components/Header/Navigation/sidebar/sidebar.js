import React from "react"
import PropTypes from "prop-types"
import Navlist from "../navigationList"
import Scss from "./sidebar.module.scss"
import BackDrop from "./../../../UI/Backdrop/backdrop"

const sidebar = props => {
  return props.isOpen ? (
    <>
      <BackDrop show={props.isOpen} clicked={props.close} />
      <div className={Scss.SideBar} onClick={props.close}>
        <Navlist></Navlist>
      </div>
    </>
  ) : null
}

// sidebar.propTypes = {

// }

export default sidebar
