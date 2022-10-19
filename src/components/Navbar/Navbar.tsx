import React, { useState } from "react";
import Typography from "../Typography/Typography";
import AnimatedHamburgerIcon from "../AnimatedHamburgerIcon/AnimatedHamburgerIcon";

import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className={styles.navbar}>
      <Typography variant={"h1"}>LOGO</Typography>

      <nav className={`${styles.nav} ${openMenu && styles.navOpened}`}>
        <ul className={styles.menuList}>
          <li>
            <Link to={"/"} onClick={() => setOpenMenu(false)}>
              <Typography variant={"h3"}>Home</Typography>
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpenMenu(false)} to={"/accordion"}>
              <Typography variant={"h3"}>Accordion</Typography>
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpenMenu(false)} to={"/carousel"}>
              <Typography variant={"h3"}>Carousel</Typography>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.hamburgerIcon}>
        <AnimatedHamburgerIcon
          isOpened={openMenu}
          onToggle={(val) => setOpenMenu(val)}
        />
      </div>
    </header>
  );
};

export default Navbar;
