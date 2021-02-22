import React, { Component } from "react";
import styled from "styled-components";

import MDJSX from "../util/MDJSXLoader";

const StyledMDJSX = styled(MDJSX)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Border extends Component {
  state = { md: "# I'm loading man" };
  componentDidMount() {
    fetch("/assets/markdowns/border.md")
      .then(res => res.text())
      .then(t => this.setState({ md: t }));
  }
  render() {
    return (
      <StyledMDJSX
        tags="#DATA VIZ #STORYTELLING"
        title="OTHER BARRIERS"
        subtitle="A data visualization that presents a bird’s eye
        view of the barriers around the globe"
        isVideo="false"
        mediaUrl="https://i.imgur.com/LuuIByk.png"
      >
        {this.state.md}
      </StyledMDJSX>
    );
  }
}

export { Border };
