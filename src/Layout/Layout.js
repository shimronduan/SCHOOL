import React from "react";
import "./Styles/Layout.css";
import NavigationBar from "../Components/Nav/NavigationBar";
import Banner from "../Components/Banner/Banner";
import Welcome from "../Components/Welcome/Welcome";
import News from "../Components/News/News";
import Calender from "../Components/Calander/Calender";
import Announcement from "../Components/Announcement/Announcement";

const Layout = () => {
  return (
    <div>
      {/* Login */}
      <NavigationBar />
      <Banner />
      <Welcome />
      <div className="row">
        <div className="col-lg-9">
          <News />
        </div>
        <div className="col-lg-3">
          <div className="row">
            <Announcement />
          </div>
          <div className="row">
            <Calender />
          </div>
        </div>
      </div>

      {/* home content */}
    </div>
  );
};

export default Layout;
