import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../containers/About/about"

const SecondPage = () => (
  <Layout>
    <SEO title="about" />
    <About></About>
  </Layout>
)

export default SecondPage
