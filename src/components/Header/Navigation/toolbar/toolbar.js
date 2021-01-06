import React from "react"
import PropTypes from "prop-types"
import Navlist from "../navigationList"
import Scss from "./toolbar.module.scss"

const toolbar = props => {
  return (
    <div className={Scss.Toolbar}>
      <Navlist></Navlist>
    </div>
  )
}

// toolbar.propTypes = {

// }

export default toolbar
