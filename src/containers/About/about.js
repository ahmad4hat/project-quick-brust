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
      <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
        <Image />
      </motion.div>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        className={Scss.AboutContainer}
      >
        <h1 className={Scss.AboutTitle}>About us</h1>
        <p className={Scss.AboutText}>
          <em style={{ fontWeight: "bold" }}>Farmland</em> is basically an agro
          management system as well as an online marketplace for farmers and
          people who want to purchase food directly from farms/farmers. As our
          country is an agricultural country “Farmland” can be really helpful to
          the farmers. Also every year our farmers are facing many issues like
          they are not getting proper price of their crops, even sometimes they
          are being cheated by the brokers. In our system anyone can sign up as
          a client or, as an agent. A client can be divided into two types: bulk
          buyers and regular buyers. A client can browse all the categories of
          farm food available from different farmers or farms. They also can
          specify the location of the farm or the farmer. But obviously a client
          has to purchase a bulk amount of products as they are directly getting
          the products from farms. An agent can be the medium between client and
          farmer. They can receive orders from clients, can do registration for
          any farmer and capable of editing their information, can handle
          transactions. Farmers can also sign up by showing their valid farm
          papers add their products to farmland, manage their inventory and keep
          track of their sales. The admin is actually the super user of the
          system who has privilege of using every feature. He can add any types
          of users and also can edit or remove them. Again they can manage the
          stock of a farmer as well as they can keep track of transactions.
        </p>
      </motion.div>
    </div>
  )
}

export default about
