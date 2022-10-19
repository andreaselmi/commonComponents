import React, { ReactNode } from "react";
import styles from "./CarouselItem.module.scss";

interface CarouselItemProps {
  children: ReactNode;
  width?: string | number;
  className?: string;
}

const CarouselItem = ({
  children,
  className,
  width = "100%",
}: CarouselItemProps) => {
  return (
    <div className={`${styles.carouselItem} ${className}`} style={{ width }}>
      {children}
    </div>
  );
};

export default CarouselItem;
