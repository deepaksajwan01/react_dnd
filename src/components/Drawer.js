import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import uploaddata from "../static/images/icons/drawer/uploaddata.svg";
import annotation from "../static/images/icons/drawer/annotation.svg";
import settings from "../static/images/icons/drawer/settings.svg";
import histogram from "../static/images/icons/drawer/histogram.svg";
import community from "../static/images/icons/drawer/community.svg";
import arrow from "../static/images/icons/arrow/arrow.svg";

import "../static/styles/drawer.css";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`drawer-wrap ${isOpen ? "show-drawer" : "hide-drawer"} `}>
      <ul className="drawer-list">
        <div className={`ltem-wrap  ${isOpen ? "open" : "item-hide"}`}>
          <NavLink exact activeClassName="active" to="/">
            <div
              className={`link-item-wrap ${isOpen ? "show-link" : "hide-link"}`}
            >
              <img src={uploaddata} alt="" />
              <li
                className={`drawer-item ${
                  isOpen ? "show-list-item" : "hide-item"
                }`}
              >
                Data Repository
              </li>
            </div>
          </NavLink>
        </div>
        <div className={`ltem-wrap  ${isOpen ? "open" : "item-hide"}`}>
          <NavLink  activeClassName="active" to="/Annotation">
            <div
              className={`link-item-wrap ${isOpen ? "show-link" : "hide-link"}`}
            >
              <img src={annotation} alt="" />
              <li
                className={`drawer-item ${
                  isOpen ? "show-list-item" : "hide-item"
                }`}
              >
               Annotation
              </li>
            </div>
          </NavLink>
        </div>
        <div className={`ltem-wrap  ${isOpen ? "open" : "item-hide"}`}>
          <NavLink   activeClassName="active" to="/settings">
            <div
              className={`link-item-wrap ${isOpen ? "show-link" : "hide-link"}`}
            >
              <img src={settings} alt="" />
              <li
                className={`drawer-item ${
                  isOpen ? "show-list-item" : "hide-item"
                }`}
              >
                Workflow Configuration
              </li>
            </div>
          </NavLink>
        </div>
        <div className={`ltem-wrap  ${isOpen ? "open" : "item-hide"}`}>
          <NavLink activeClassName="active" to="/results">
            <div
              className={`link-item-wrap ${isOpen ? "show-link" : "hide-link"}`}
            >
              <img src={histogram} alt="" />
              <li
                className={`drawer-item ${
                  isOpen ? "show-list-item" : "hide-item"
                }`}
              >
                Results & Visualization{" "}
              </li>
            </div>
          </NavLink>
        </div>
        <div className={`ltem-wrap  ${isOpen ? "open" : "item-hide"}`}>
          <NavLink  activeClassName="active" to="/community">
            <div
              className={`link-item-wrap ${isOpen ? "show-link" : "hide-link"}`}
            >
              <img src={community} alt="" />
              <li
                className={`drawer-item ${
                  isOpen ? "show-list-item" : "hide-item"
                }`}
              >
                Community 
              </li>
            </div>
          </NavLink>
        </div>
      </ul>
      <div
        className={`drawer-btn ${
          isOpen ? "drawer-btn-left" : "drawer-btn-right"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img className="" src={arrow} alt="slide-button" />
      </div>
      
    </div>
  );
};

export default Drawer;
