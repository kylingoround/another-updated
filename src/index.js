import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// import { Router } from "@reach/router";
import ScrollToTop from "./util/ScrollToTop";
import withTracker from "./util/withTracker";

import Main from "./pages/Main";
import { Cyber, PIPO, Border, Event, Hamsa, Game, Test } from "./projects";

import "./styles.css";

const App = () => (
  <Router>
    <Route exact path="/" component={withTracker(Main)} />
    <Route path="/game" component={withTracker(Game)} />
    {/* <Route path="/kiosk" component={withTracker(Cyber)} /> */}
    <Route path="/cyber" component={withTracker(Cyber)} />
    <Route path="/pipo" component={withTracker(PIPO)} />
    <Route path="/border" component={withTracker(Border)} />
    <Route path="/event" component={withTracker(Event)} />
    <Route path="/hamsa" component={withTracker(Hamsa)} />

    <Route
      path="/pdf"
      component={() => {
        window.location.href =
          "https://www.dropbox.com/s/eu5hsezuvjndu7v/cyber_kylin_optimized.pdf?dl=0";
        return null;
      }}
    />

    <Route
      path="/megvii"
      component={() => {
        window.location.href =
          "https://www.dropbox.com/s/v78xej464ukej1a/megvii_slider_optimized.pdf?dl=0";
        return null;
      }}
    />

    <Route
      path="/pipopdf"
      component={() => {
        window.location.href =
          "https://www.dropbox.com/s/j7zkt3t1yk8wdfy/pipo_reduced.pdf?dl=0";
        return null;
      }}
    />

    <Route
      path="/resume"
      component={() => {
        window.location.href = () => {
          process.env.PUBLIC_URL + "/myfile.pdf";
        };
        return null;
      }}
    />
  </Router>
);

// https://www.dropbox.com/s/v78xej464ukej1a/megvii_slider_optimized.pdf?dl=0
// redirect: https://stackoverflow.com/questions/42914666/react-router-external-link

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
