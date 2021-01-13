import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import Team from "./../containers/Team/Team"

const team = props => {
  return (
    <Layout>
      <SEO title="Team" />
      <Team></Team>
    </Layout>
  )
}

team.propTypes = {}

export default team
