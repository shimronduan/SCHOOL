import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./AnnouncementSlide.css";
import BImg3 from "../../../Images/Banner/fsbanner3.jpg";
const AnnouncementSlide = (props) => {
  return (
    <Carousel.Item>
      <div className="new_html_code"></div>

      <Carousel.Caption className="AnnouncementSlideCaption">
        <h3>{props.Title}</h3>
        <p>{props.body}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default AnnouncementSlide;
