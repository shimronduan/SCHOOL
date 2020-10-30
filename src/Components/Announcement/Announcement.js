import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import AnnouncementSlide from "./AnnouncementSlide/AnnouncementSlide";
import "./Announcement.css";
const Announcement = () => {
  return (
    <Card
      bg="dark"
      text={"light"}
      style={{ width: "18rem", minHeight: "150px" }}
      className="mb-2"
      id="announcement"
    >
      <Card.Header>Announcements</Card.Header>
      <Card.Body
        id="announcement_body"
        style={{ paddingTop: "0px", paddingBottom: "0px", minHeight: "130px" }}
      >
        <Carousel controls={false} indicators={false} id="announcement_slider">
          <Carousel.Item>
            <div class="new_html_code"></div>
            <Carousel.Caption className="AnnouncementSlideCaption">
              <h6>School Leave</h6>
              <p>The will be closed till futher notice due to Covid-19</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="announcement_slider_item">
            <div class="new_html_code"></div>
            <Carousel.Caption className="AnnouncementSlideCaption">
              <h6>New admission for 2021</h6>
              <p>
                Interview for the Admission of grade 1 will be held at 10:00 am
                December 2020.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  );
};

export default Announcement;
