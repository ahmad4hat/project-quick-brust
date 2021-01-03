import React from "react"
import PropTypes from "prop-types"
import Scss from "./landing.module.scss"
import earth from "./earth.svg"

const landing = props => {
  return (
    <div className={Scss.LandingContainer}>
      <div className={Scss.LandingInfo}>
        <div>
          <h1 className={Scss.LandingInfoText}>
            Connection Farmer with Consumer
          </h1>
          <div className={Scss.BtnStretch}>Learn More</div>
        </div>
      </div>
      <div className={Scss.LandingImg}>
        <img src={earth}></img>
      </div>
    </div>
  )
}

// landing.propTypes = {

// }

export default landing
