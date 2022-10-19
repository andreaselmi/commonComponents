import React, { Children, ReactNode, useState } from "react";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrowRight.svg";

import styles from "./Carousel.module.scss";

interface CarouselProps {
  children: ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.carousel}>
      <span
        role={"button"}
        className={styles.controlCarouselIcon}
        onClick={() => {
          if (activeIndex === 0) {
            return;
          } else {
            setActiveIndex((prevState) => prevState - 1);
          }
        }}
      >
        <ArrowLeft fill={activeIndex <= 0 ? "grey" : "white"} />
      </span>
      <div
        className={styles.carouselItemContainer}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {});
          }
        })}
      </div>
      <span
        role={"button"}
        className={styles.controlCarouselIcon}
        onClick={() => {
          if (activeIndex === Children.count(children) - 1) {
            return;
          } else {
            setActiveIndex((prevState) => prevState + 1);
          }
        }}
      >
        <ArrowRight
          fill={activeIndex >= Children.count(children) - 1 ? "grey" : "white"}
        />
      </span>
    </div>
  );
};

export default Carousel;
