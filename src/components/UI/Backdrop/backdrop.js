import React from "react"
import CssClass from "./backdrop.module.scss"

const backdrop = props => {
  return props.show ? (
    <div className={CssClass.Backdrop} onClick={props.clicked}></div>
  ) : null
}

export default backdrop
