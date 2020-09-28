import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Source from "./Source";
import Target from "./Target";
import Header from './components/Header'
import Drawer from './components/Drawer'
import Dashboard from './components/Dashboard'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
          <Header />
        {/* <h3 className="text-center">React Drag and Drop</h3>
        <div className="dnd-wrap">
          <Source />
          <Target />
        </div> */}
        <div className="layout-wrap">
          <Drawer />
          <Dashboard />
        </div>
        
      </div>
    </DndProvider>
  );
}

export default App;
