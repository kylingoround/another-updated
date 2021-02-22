import React, { Component } from "react";
import styled from "styled-components";

import MDJSX from "../util/MDJSXLoader";

const StyledMDJSX = styled(MDJSX)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Cyber extends Component {
  state = { md: "# I'm loading man" };
  componentDidMount() {
    fetch("/assets/markdowns/cyber.md")
      .then(res => res.text())
      .then(t => this.setState({ md: t }));
  }
  render() {
    return (
      <StyledMDJSX
        tags="#VR #STORYTELLING #YAY"
        title="BECOMING A GENIE TO YOUR VR FRIEND"
        subtitle="Using Gesture-Control To Pair Up Monitor And VR Headset In A Hybrid Social Experience"
        isVideo="false"
        mediaUrl="https://player.vimeo.com/video/187478380"
      >
        {this.state.md}
      </StyledMDJSX>
    );
  }
}

export { Cyber };
