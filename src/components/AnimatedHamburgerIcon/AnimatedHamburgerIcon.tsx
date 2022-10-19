import React, { useState } from "react";

import styles from "./AnimatedHamburgerIcon.module.scss";

interface AnimatedHamburgerIconProps {
  onToggle: (val: boolean) => void;
}

const AnimatedHamburgerIcon = ({ onToggle }: AnimatedHamburgerIconProps) => {
  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <div
      className={styles.container}
      onClick={() => {
        setToggleIcon((prevState) => !prevState);
        onToggle(!toggleIcon);
      }}
    >
      <div className={`${styles.hamburger} ${toggleIcon && styles.open}`} />
    </div>
  );
};

export default AnimatedHamburgerIcon;
