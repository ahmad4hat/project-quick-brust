import React from "react"
import PropTypes from "prop-types"
import Navlist from "../navigationList"
import Scss from "./sidebar.module.scss"
import BackDrop from "./../../../UI/Backdrop/backdrop"
import { motion } from "framer-motion"

const sidebar = props => {
  return (
    <>
      <motion.div animate={{ opacity: props.isOpen ? 1 : 0 }}>
        <BackDrop show={props.isOpen} clicked={props.close} />
      </motion.div>

      <motion.div
        onClick={e => e.stopPropagation()}
        // initial={{ x: "100%" }}
        animate={{
          x: props.isOpen ? 60 : "100%",
          opacity: props.isOpen ? 1 : 0,
          // display: props.isOpen ? "block" : "none",
        }}
        transition={{ type: "spring" }}
        className={Scss.SideBar}
      >
        <h4 onClick={props.close}>Clear</h4>
        <Navlist></Navlist>
      </motion.div>
    </>
  )
}

// sidebar.propTypes = {

// }

export default sidebar
