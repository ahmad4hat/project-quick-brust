import React from "react"
import PropTypes from "prop-types"
import Scss from "./landing.module.scss"
import earth from "./earth.svg"
import { motion } from "framer-motion"

const landing = props => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className={Scss.LandingContainer}
    >
      <div className={Scss.LandingInfo}>
        <div>
          <h1 className={Scss.LandingInfoText}>
            Connection Farmer with Consumer
          </h1>
          <div className={Scss.BtnStretch}>Learn More</div>
        </div>
      </div>
      <motion.div
        initial={{ y: -16 }}
        animate={{ y: 16 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
        className={Scss.LandingImg}
      >
        <img src={earth}></img>
      </motion.div>
    </motion.div>
  )
}

// landing.propTypes = {

// }

export default landing
