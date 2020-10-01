import React, { Component } from "react";
import { useLocation } from "react-router";
import "../static/styles/header.css";

import logo from "../static/images/logo/logo.svg";
import user from "../static/images/icons/user/user.svg";

const Header = (props) => {
  const location = useLocation();
  const str =
    location.pathname.length <= 1
      ? "Dashboard"
      : location.pathname.slice(1, location.pathname.length);
  const title = str.charAt(0).toUpperCase() + str.slice(1)
  return (
    <div className="header-wrap">
      <div className="header-logo-wrap">
        <img src={logo} alt="" />
        <p className="app-title">
          Research App <span className="current-component-title">{title}</span>{" "}
        </p>
      </div>
      <div className="user-icon-wrap">
        <img src={user} alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
