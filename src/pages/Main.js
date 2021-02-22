import React from "react";
import styled from "styled-components";
import ScrollToTopOnMount from "../util/ScrollToTopOnMount";

import { Greetings, WorkScreen, About } from "../components";

const Main = () => (
  <div>
    <ScrollToTopOnMount />
    <Greetings />
    <WorkScreen />
    <About />
  </div>
);

export default Main;
