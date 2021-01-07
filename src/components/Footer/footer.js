import React from "react"
import PropTypes from "prop-types"
import Scss from "./footer.module.scss"

const footer = props => {
  return (
    <footer className={Scss.Footer}>
      <div className={Scss.FooterContent}>
        © {new Date().getFullYear()}, @Ahmad and Team
      </div>
    </footer>
  )
}

// footer.propTypes = {

// }

export default footer
