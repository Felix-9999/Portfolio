import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const headersHADO = useHeaderShadow()
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={` paddings ${css.wrapper}`}
      style={{ boxShadow: headersHADO }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          Felix
        </div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}>

          <li><a href="">Services</a></li>
          <li><a href="">Experience</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+374 816 817</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        <div className={css.menuIcon}
          onClick={() => setMenuOpened(prev => !prev)}
        >

          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  )
};

export default Header;