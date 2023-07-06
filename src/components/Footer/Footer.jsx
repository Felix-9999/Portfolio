import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>


      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            nice web pages<br />
            always before everyone else
          </span>
          <span className="primaryText">
            Start by <a href="mailto:feliksharutyunyan615@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contact me</span>
          </div>
          <ul className={css.menu}>
            <li>
              <a className={css.email} href="mailto:feliksharutyunyan615@gmail.com">
                feliksharutyunyan615@gmail.com
              </a>
            </li>
            <li>
              <a className={css.email} href="https://www.linkedin.com/in/felo-harutyunyan-641252248/">
                Linkedin
              </a>
            </li>
            <li>
              <a className={css.email} href="https://github.com/Felix-9999">
                Github
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
