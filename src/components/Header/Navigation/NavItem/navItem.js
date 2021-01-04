import React, { useRef } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Scss from "./navItem.module.scss"

const navItem = props => {
  return (
    <li className={Scss.MarginBetweenItem}>
      <Link to={props.url} activeClassName={Scss.Active} className={Scss.Item}>
        {/* <div className={Scss.VLine}></div> */}
        <div className={Scss.ItemInside}>
          <div className={Scss.Text}>{props.children}</div>
          {/* <div className={Scss.HLine}></div> */}
        </div>
      </Link>
    </li>
  )
}

navItem.propTypes = {
  url: PropTypes.string,
}

export default navItem
