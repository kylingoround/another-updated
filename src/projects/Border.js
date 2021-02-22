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
        hasVideo={false}
        // mediaUrl="https://i.imgur.com/LuuIByk.png"
        thumbnail="https://paper-attachments.dropbox.com/s_D05655C47811550445C848F53FC5B1515762943486940BEB0178134B63D6576E_1567647897948_image.png"
        colors={[]}
      >
        {this.state.md}
      </StyledMDJSX>
    );
  }
}

export { Border };
