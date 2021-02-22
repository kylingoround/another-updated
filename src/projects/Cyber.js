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
        tags="# product # ui/ux # data-viz"
        title="BUILDING A HUMANE DASHBOARD"
        subtitle="Building Transparent and Trustable A.I. Dashboard for Cybersecurity Operators"
        hasVideo={true}
        mediaUrl="https://player.vimeo.com/video/298942394"
        thumbnail="https://i.imgur.com/JwTHkOh.png"
      >
        {this.state.md}
      </StyledMDJSX>
    );
  }
}

export { Cyber };
