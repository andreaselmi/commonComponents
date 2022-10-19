import React from "react";
import CarouselItem from "../components/Carousel/CarouselItem/CarouselItem";
import Carousel from "../components/Carousel/Carousel";
import SamplePageWrapper from "../components/SamplePageWrapper/SamplePageWrapper";

const CarouselExample = () => {
  return (
    <SamplePageWrapper title={"Carousel"}>
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
    </SamplePageWrapper>
  );
};

export default CarouselExample;
