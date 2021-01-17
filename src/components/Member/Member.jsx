import React from "react"
import PropTypes from "prop-types"
import Scss from "./Member.module.scss"
import Img from "gatsby-image"
import { motion } from "framer-motion"

const Member = props => {
  return (
    <div className={Scss.Card}>
      <div className={Scss.ImgContainer}>
        <Img className={Scss.Img} fluid={props.image}></Img>
      </div>
      <h2 className={Scss.Name}>{props.name}</h2>
      <h4>{props.role}</h4>
      <p>{props.description}</p>
    </div>
  )
}

Member.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
  role: PropTypes.string,
  description: PropTypes.string,
}

export default Member
