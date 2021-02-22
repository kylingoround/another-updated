import React, { Component } from "react";
import styled from "styled-components";

import MDJSX from "../util/MDJSXLoader";

const StyledMDJSX = styled(MDJSX)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Event extends Component {
  state = { md: "# I'm loading man" };
  componentDidMount() {
    fetch("/assets/markdowns/event.md")
      .then(res => res.text())
      .then(t => this.setState({ md: t }));
  }
  render() {
    return (
      <StyledMDJSX
        tags="#web-design #ui/ux"
        title="CONFERENCE WEBSITE"
        subtitle="An event website that showcases key information and allow user to register and find partners."
        hasVideo={false}
        thumbnail="https://images.unsplash.com/photo-1457419655743-2e0acc6b5122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        colors={[]}
      >
        {this.state.md}
      </StyledMDJSX>
    );
  }
}

export { Event };
