import React from "react"
import Image from "./../../components/image"
import Scss from "./about.module.scss"
import { motion } from "framer-motion"

const about = () => {
  // let img = []
  // for (let i = 0; i < 5; i++) {
  //   img.push(<Image></Image>)
  // }
  return (
    <div className={Scss.About}>
      <motion.div initial={{ x: -1000 }} animate={{ x: 0 }}>
        <Image />
      </motion.div>
      <motion.div 
        initial={{ y: "-100%" }}
        animate={{ y: 20 }}
        className={Scss.AboutContainer}
      >
        <h1 className={Scss.AboutTitle}>About us</h1>
        <p>
          We are trying to solve the difficult but important problem of
          connection customer with farmer with as little middle man as possible.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          dolorem quidem modi? Consectetur placeat expedita magnam nulla vero
          quia facere, corporis ducimus recusandae magni, ipsa quas dignissimos
          ratione itaque doloribus.
        </p>
      </motion.div>
    </div>
  )
}

export default about
