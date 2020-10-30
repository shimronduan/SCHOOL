import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import BImg1 from "../../Images/Banner/fsbanner1.jpg";
import BImg2 from "../../Images/Banner/fsbanner2.jpg";
import BImg3 from "../../Images/Banner/fsbanner3.jpg";
import BImg4 from "../../Images/Banner/fsbanner4.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="Banner">
      <Carousel activeIndex={index} onSelect={handleSelect} fade={true} f>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={BImg1}
            alt="First slide"
            height="440px"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={BImg4}
            alt="Second slide"
            height="440px"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={BImg2}
            alt="Third slide"
            height="440px"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
