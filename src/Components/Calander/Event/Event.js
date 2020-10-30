import React from "react";
import "@fortawesome/fontawesome-free/js/all";
import "./Event.css";

const Event = () => {
  return (
    <div className="event_container">
      <div className="row">
        <div className="event_date_section">
          <h5 className="event_date">22</h5>
          <h6 className="event_date">Tue</h6>
        </div>
        <div className="event_Description">
          <h6 className="event_date">Event Title</h6>
          <div className="event_detail_section">
            <div className="event_detail">
              <i className="far fa-calendar-alt"></i>
              <span>29 December 2020</span>
            </div>
            <div className="event_detail">
              <i className="far fa-clock"></i>
              <span>7:00 pm - 9:00 pm</span>
            </div>
            <div className="event_detail">
              <i className="fas fa-location-arrow"></i>
              <span>School Auditorium</span>{" "}
            </div>
          </div>
        </div>
        <div className="fade_rule"></div>
      </div>
    </div>
  );
};

export default Event;
