import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Scss from "./Team.module.scss"
import Member from "./../../components/Member/Member"
import { motion } from "framer-motion"
const Team = props => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "farhat.png" }) {
        childImageSharp {
          fluid(grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholder: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const description =
    "Trying to Solve the front end and and consumer facing problem "

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className={Scss.Container}
    >
      {/* <img src={ahmad.c}> </img> */}
      {/* <div className={Scss.Img}> */}
      <Member
        image={data.file.childImageSharp.fluid}
        name={"Ahmad, Farhat"}
        role={"Frontend and UI / UX"}
        description={description}
      ></Member>
      <Member
        image={data.placeholder.childImageSharp.fluid}
        name={"Placeholder"}
        role={"Test"}
        description={description}
      ></Member>
      <Member
        image={data.placeholder.childImageSharp.fluid}
        name={"Placeholder"}
        role={"Game tester and stuff"}
        description={description}
      ></Member>
      {/* </div> */}
    </motion.div>
  )
}

Team.propTypes = {}

export default Team
