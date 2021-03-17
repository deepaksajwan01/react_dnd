import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Source from "./Source";
import Target from "./Target";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Dashboard from "./components/Dashboard";
import Annotation from "./components/Annotation";
import Settings from "./components/Settings";
import Results from "./components/Results";
import Community from "./components/Community";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="dnd-wrapper">
        <Source />
        <Target />
      </div>
    </DndProvider>
    /*  <Router>
      <div>
        <Header />
        <div className="layout-wrap">
          <Drawer />
          <Switch>
          <div className="dashboard-wrap">
            <Route path="/" exact strict component={Dashboard} />
            <Route path="/annotation/" exact  component={Annotation} />
            <Route path="/settings/" exact component={Settings} />
            <Route path="/results/" exact component={Results} />
            <Route path="/community/" exact component={Community} />
            </div>
          </Switch>
        </div>
      </div>
    </Router> */
  );
}

export default App;
