import React from "react"
import PropTypes from "prop-types"
import Scss from "./navItem.module.scss"

const navItem = props => {
  return (
    <li className={Scss.MarginBetweenItem}>
      <div className={Scss.Item}>
        <div className={Scss.VLine}></div>
        <div className={Scss.ItemInside}>
          <div className={Scss.Text}>{props.children}</div>
          <div className={Scss.HLine}></div>
        </div>
      </div>
    </li>
  )
}

navItem.propTypes = {
  url: PropTypes.string,
}

export default navItem
