import React from "react"
import { Link } from "gatsby"
import Landing from "./../components/Landing/landing"

import "./index.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing></Landing>
  </Layout>
)

export default IndexPage
