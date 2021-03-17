import React from "react";

import Table from './Table'

import "../static/styles/dashboard.css";
import searchIcon from "../static/images/icons/search/search.svg";
import uploadIcon from "../static/images/icons/upload/upload.svg";
import downArrowIcon from "../static/images/icons/arrow/down/downArrow.svg";
import { Tab } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div className="dashboard-wrap">
      <div className="dashboard-header">
        <div className="dashboard-header-left">
          <div className="dashboard-title">
            <p>Data Repository</p>
          </div>
        </div>
        <div className="dashboard-header-right">
          <div className="search-panel">
            <input type="text" placeholder="Search by typing" />
            <img className="search-icon" src={searchIcon} alt="" />
          </div>
          <div className="export-button">
            <button>Export</button>
          </div>
          <div className="load-data">
            <img src={uploadIcon} alt="" />
            <div className="option-title">
              <p>Load Files from ZEISS HDR</p>
            </div>
            <img className="down-arrow" src={downArrowIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="dashboard-table-wrap">
        <Table />
      </div>
    </div>
  );
}
