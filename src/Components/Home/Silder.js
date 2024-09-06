import React, { useState } from "react";
import { Navbar, Container, Carousel, FormControl, Nav } from "react-bootstrap";
import sliderfour from "../../images/sliderfour.jpg";

const Silder = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="slider-background" interval={2000}>
        <div className="">
          <img
            style={{ height: "296px", width: "100%" }}
            className=""
            src={sliderfour}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Silder;
