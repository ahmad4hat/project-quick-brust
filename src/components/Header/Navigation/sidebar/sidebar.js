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
        // initial={{ x: "100%" }}
        animate={{
          x: props.isOpen ? 40 : "100%",
          opacity: props.isOpen ? 1 : 0,
        }}
        transition={{ type: "spring" }}
        className={Scss.SideBar}
        onClick={props.close}
      >
        <Navlist></Navlist>
      </motion.div>
    </>
  )
}

// sidebar.propTypes = {

// }

export default sidebar
