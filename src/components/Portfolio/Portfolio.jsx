import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My  Works</span>
          </div>
        </motion.div>


        <div className={`flexCenter ${css.showCase} `}>
          <div className={css.div}>
            <a href="https://restoran-shop.vercel.app/" target="_blank">
              <motion.img variants={fadeIn("up", "tween", .5, .6)} src="shop1.png" alt="project" />
            </a>
            <a href="https://github.com/Felix-9999/Restoran-shop" target="_blank"><h1>SHOP</h1></a>
          </div>
          <div className={css.div}>
            <a href="https://crud-rosy-two.vercel.app/login" target="_blank">
              <motion.img variants={fadeIn("up", "tween", .7, .6)} src="table1.png" alt="project" />
            </a>
            <a href="https://github.com/Felix-9999/CRUD" target="_blank"><h1>CRUD</h1></a>
          </div>
          <div className={css.div}>
            <a href="https://memory-game-rho-brown.vercel.app/" target="_blank">
              <motion.img variants={fadeIn("up", "tween", .9, .6)} src="games.png" alt="project" />
            </a>
            <a href="https://github.com/Felix-9999/Memory-Game" target="_blank"><h1>Memory-Game</h1></a>
          </div>
          <div className={css.div}>
            <a href="https://calculator-2-zeta.vercel.app/" target="_blank">
              <motion.img variants={fadeIn("up", "tween", .9, .6)} src="calck.png" alt="project" />
            </a>
            <a href="https://github.com/Felix-9999/Calculator-2.git" target="_blank"><h1>Calculator</h1></a>
          </div>
          <div className={css.div}>
            <a href="https://to-do-flame-two.vercel.app/" target="_blank">
              <motion.img variants={fadeIn("up", "tween", .9, .6)} src="to-do.png" alt="project" />
            </a>
            <a href="https://github.com/Felix-9999/to-do" target="_blank"><h1>TO-DO</h1></a>
          </div>

          <div className={css.div}>
            <a href="https://mini-shop-project.vercel.app/" target="_blank">
              <motion.img variants={fadeIn("up", "tween", .9, .6)} src="mini-shop.png" alt="project" />
            </a>
            <a href="https://github.com/Felix-9999/mini-shop-project" target="_blank"><h1>MINI-SHOP</h1></a>
          </div>
        </div>
      </div>
    </motion.section >
  );
};

export default Portfolio;
