import React from "react";
import Typography from "../Typography/Typography";

import { ReactComponent as ArrowRight } from "../../assets/icons/chevronRight.svg";

import styles from "./Accordion.module.scss";

const Accordion = () => {
  return (
    <div className={styles.container}>
      <Typography variant={"h3"}>Accordion</Typography>

      <div className={styles.accordion}>
        <input
          id={"item1"}
          type={"checkbox"}
          className={styles.accordionControl}
        />
        <label htmlFor={"item1"} className={`${styles.accordionLabel}`}>
          <Typography variant={"h4"}>Item 1</Typography>

          <ArrowRight fill={"white"} />
        </label>

        <div className={`${styles.accordionContent}`}>
          <Typography variant={"p"}>
            If you want to know what a man’s like, take a good look at how he
            treats his inferiors, not his equals.
          </Typography>
        </div>
      </div>

      <div className={styles.accordion}>
        <input
          id={"item2"}
          type={"checkbox"}
          className={styles.accordionControl}
        />
        <label htmlFor={"item2"} className={`${styles.accordionLabel}`}>
          <Typography variant={"h4"}>Item 2</Typography>
          <ArrowRight fill={"white"} />
        </label>

        <div className={`${styles.accordionContent}`}>
          <Typography variant={"p"}>
            The first rule of space travel kids is always check out distress
            beacons. Nine out of ten times it&apos;s a ship full of dead aliens
            and a bunch of free shit! One out of ten times it&apos;s a deadly
            trap, but... I&apos;m ready to roll those dice!
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
