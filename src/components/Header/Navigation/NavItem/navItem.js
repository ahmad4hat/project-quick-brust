import React, { useRef } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Scss from "./navItem.module.scss"
import { motion } from "framer-motion"

const navItem = props => {
  return (
    <li className={Scss.MarginBetweenItem}>
      <Link to={props.url} activeClassName={Scss.Active} className={Scss.Item}>
        {/* <div className={Scss.VLine}></div> */}
        <motion.div
          className={Scss.ItemInside}
          whileHover={{ color: "#075446", scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className={Scss.Text}>{props.children}</div>
          {/* <div className={Scss.HLine}></div> */}
        </motion.div>
      </Link>
    </li>
  )
}

navItem.propTypes = {
  url: PropTypes.string,
}

export default navItem
