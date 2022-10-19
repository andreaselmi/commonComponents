import React from "react";
import CarouselItem from "../components/Carousel/CarouselItem/CarouselItem";
import Carousel from "../components/Carousel/Carousel";

const CarouselExample = () => {
  return (
    <Carousel>
      <CarouselItem>
        <img
          style={{ width: "100%", height: "100%" }}
          src={"https://picsum.photos/500/300?random=3"}
          alt={"random image"}
        />
      </CarouselItem>
      <CarouselItem>
        <img
          style={{ width: "100%", height: "100%" }}
          src={"https://picsum.photos/500/300?random=222"}
          alt={"random image"}
        />
      </CarouselItem>
      <CarouselItem>
        <img
          style={{ width: "100%", height: "100%" }}
          src={"https://picsum.photos/500/300?random=3287"}
          alt={"random image"}
        />
      </CarouselItem>
    </Carousel>
  );
};

export default CarouselExample;
