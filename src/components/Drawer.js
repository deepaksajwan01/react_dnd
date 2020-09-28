import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "../static/styles/drawer.css";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);

  return (
    <div className={`drawer-wrap ${isOpen ? "show-drawer" : "hide-drawer"} `}>
      <ul className="drawer-list">
        <div className={`ltem-wrap ${isOpen ? 'open' : 'item-hide' }`}>
          <FontAwesomeIcon icon={faCoffee} />
          <li className={`drawer-item ${isOpen ? "show-list-item" : "hide-item"}`}>Data Repository </li>
        </div>
        <div className={`ltem-wrap ${isOpen ? 'open' : 'item-hide' }`}>
          <FontAwesomeIcon icon={faCoffee} />
          <li
            className={`drawer-item ${isOpen ? "show-list-item" : "hide-item"}`}
          >
            Annotation{" "}
          </li>
        </div>
        <div className={`ltem-wrap ${isOpen ? 'open' : 'item-hide' }`}>
          <FontAwesomeIcon icon={faCoffee} />
          <li className={`drawer-item ${isOpen ? "show-list-item" : "hide-item"}`}>Workflow Configuration </li>
        </div>
        <div className={`ltem-wrap ${isOpen ? 'open' : 'item-hide' }`}>
          <FontAwesomeIcon icon={faCoffee} />
          <li className={`drawer-item ${isOpen ? "show-list-item" : "hide-item"}`}>Results & Visualization </li>
        </div>
        <div className={`ltem-wrap ${isOpen ? 'open' : 'item-hide' }`}>
          <FontAwesomeIcon icon={faCoffee} />
          <li className={`drawer-item ${isOpen ? "show-list-item" : "hide-item"}`}>Community </li>
        </div>
      </ul>
      <span className="drawer-btn" onClick={() => setIsOpen(!isOpen)}>
        X
      </span>
    </div>
  );
};

export default Drawer;
