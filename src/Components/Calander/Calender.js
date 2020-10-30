import React from "react";
import Card from "react-bootstrap/Card";
import Event from "./Event/Event";
import "./Calender.css";
const Calender = () => {
  return (
    <Card bg="Light" style={{ width: "18rem" }} className="mb-2">
      <Card.Header>Event Calender</Card.Header>
      <Card.Body>
        <Event />
        <Event />
        <Event />
        <Event />
      </Card.Body>
    </Card>
    // <div className="calender container">
    //   <Event className="event" />
    //   <Event className="event" />
    //   <Event className="event" />
    //   <Event className="event" />
    // </div>
  );
};

export default Calender;
