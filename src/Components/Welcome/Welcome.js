import React, { useEffect } from "react";
import "./Welcome.css";
import Configs from "../../Services/Configs/Configs.json";
const Welcome = (props) => {
  return (
    <div className="row welcome__row">
      <div className="col-lg-1"></div>
      <div className="col-lg-10 welcome__content">
        <h2>{Configs.Welcome.WelcomeTitle}</h2>
        <p>{Configs.Welcome.WelcomeMessage}</p>
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
};

export default Welcome;
