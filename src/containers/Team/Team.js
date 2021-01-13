import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Scss from "./Team.module.scss"
import Img from "gatsby-image"
const Team = props => {
  const ahmad = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "farhat.png" }) {
        childImageSharp {
          fluid(grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={Scss.Container}>
      <h1>Hello</h1>
      {/* <img src={ahmad.c}> </img> */}
      {/* <div className={Scss.Img}> */}
      <Img className={Scss.Img} fluid={ahmad.file.childImageSharp.fluid}></Img>
      {/* </div> */}
    </div>
  )
}

Team.propTypes = {}

export default Team
