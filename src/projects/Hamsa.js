import React, { Component } from "react";
import styled from "styled-components";

import MDJSX from "../util/MDJSXLoader";

const StyledMDJSX = styled(MDJSX)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Hamsa extends Component {
  state = { md: "# I'm loading man" };
  componentDidMount() {
    fetch("/assets/markdowns/hamsa.md")
      .then(res => res.text())
      .then(t => this.setState({ md: t }));
  }
  render() {
    return (
      <StyledMDJSX
        tags="#VR #STORYTELLING"
        title="BECOMING A GENIE TO YOUR VR FRIEND"
        subtitle="Using Gesture-Control To Pair Up Monitor And VR Headset In A Hybrid Social Experience"
        hasVideo={true}
        mediaUrl="https://player.vimeo.com/video/187478380"
        thumbnail="https://images.unsplash.com/photo-1500206329404-5057e0aefa48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"
        colors={[
          "#DEF7FC",
          "#B0ECF5",
          "#7CE0EF",
          "#44D2E7",
          "#01C7E1",
          "#00BEDC",
          "#00AEC8",
          "#0099AE",
          "#008695",
          "#00636A"
        ]}
        themeColor="#01C7E1"
      >
        {this.state.md}
      </StyledMDJSX>
    );
  }
}

export { Hamsa };
