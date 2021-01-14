import React from "react"
import CssClass from "./backdrop.module.scss"

const backdrop = props => {
  console.log("backdrop clicked")
  return props.show ? (
    <div className={CssClass.Backdrop} onClick={props.clicked}></div>
  ) : null
}

export default backdrop
