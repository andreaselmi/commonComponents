import React, { useState } from "react";
import Typography from "../Typography/Typography";
import AnimatedHamburgerIcon from "../AnimatedHamburgerIcon/AnimatedHamburgerIcon";

import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.container}>
      <Typography variant={"h1"}>LOGO</Typography>

      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/accordion"}>Accordion</Link>
          </li>
          <li>
            <Link to={"/carousel"}>Carousel</Link>
          </li>
        </ul>
      </div>

      <div className={styles.hamburgerIcon}>
        <AnimatedHamburgerIcon onToggle={(val) => console.log(val)} />
      </div>
    </div>
  );
};

export default Navbar;
