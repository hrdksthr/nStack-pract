import React from "react";
import "./ContainerHeader.css";
import { Link } from "react-router-dom"
import { Layout, Popover, Button, Icon, Badge } from "antd";

import HeaderLogo from "assets/images/header_logo.png";

const ContainerHeader = () => {
  const content = (
    <div className="Grofoo-home" style={{ margin: "-12px -16px" }}>
      <div className="search-box">
        <div className="dropdown-menu extended tasks-bar">
          <div className="deliver-section">
            Deliver in : <span className="clr_green">Gurugram</span>
          </div>
          <div className="location-selection">
            <p>——— Or Select your city ———</p>
            <h1>Top Searched Cities</h1>
            <span className="city_tag">
              New York
                                        </span>
            <span className="city_tag">
              Brooklyn
                                        </span>
            <span className="city_tag">
              Chicago
            </span>
            <div className="location-search-box">
              <i className="location-seach-icon ion-ios-search"></i>
              <input type="text" className="search-input" placeholder="Address, city, zip code or state" />
              <button className="auto-detect-btn"><i className="ion-android-locate"></i>Detect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Layout.Header style={{ position: 'fixed', zIndex: 10, width: '100%', background: "#f8f8f8" }}>
      <Link to="/home" >
        <img src={HeaderLogo} alt="Header" style={{ height: "70%", verticalAlign: "middle" }} />
      </Link>
      <div style={{ display: "inline-block", float: "right" }}>
        <Popover
          content={content}
          title={<b>Where Do You Want The Delivery?</b>}
          placement="bottom"
          trigger="click">
          <Button type="link" style={{ color: "black" }}> Location <Icon type="down" /></Button>
        </Popover>
        <span className="notify-row" style={{ display: "inline-block" }}>
          <span className="bell ">
            <Badge count={3} offset={[2, -5]}>
              <Icon type="shopping-cart" />
            </Badge>
            <span style={{ padding: "0 15px" }}>
              My Cart
                                        </span>
          </span>
        </span>
        <Link to="/sign-in">
          <Button style={{ background: "#94c12a", color: "#ffff" }}> Sign In</Button>
        </Link>

      </div>
    </Layout.Header>
  )
};

export default ContainerHeader;
