import React from "react";

import styles from "./AnimatedHamburgerIcon.module.scss";

interface AnimatedHamburgerIconProps {
  onToggle: (val: boolean) => void;
  isOpened: boolean;
}

const AnimatedHamburgerIcon = ({
  isOpened,
  onToggle,
}: AnimatedHamburgerIconProps) => {
  return (
    <div
      className={styles.container}
      onClick={() => {
        onToggle(!isOpened);
      }}
    >
      <div className={`${styles.hamburger} ${isOpened && styles.open}`} />
    </div>
  );
};

export default AnimatedHamburgerIcon;
