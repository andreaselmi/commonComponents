import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import CarouselExample from "../pages/CarouselExample";
import DropDownExample from "../pages/DropDownExample";
import TypographyExample from "../pages/TypographyExample";
import AccordionExample from "../pages/AccordionExample";
import Navbar from "../components/Navbar/Navbar";

const MyRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="carousel" element={<CarouselExample />} />
        <Route path="dropdown" element={<DropDownExample />} />
        <Route path="typography" element={<TypographyExample />} />
        <Route path="accordion" element={<AccordionExample />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
