import React, { Component } from "react";
import styled from "styled-components";

import MDJSX from "../util/MDJSXLoader";

const StyledMDJSX = styled(MDJSX)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class PIPO extends Component {
  state = { md: "# I'm loading man" };
  componentDidMount() {
    fetch("/assets/markdowns/pipo.md")
      .then(res => res.text())
      .then(t => this.setState({ md: t }));
  }
  render() {
    return (
      <StyledMDJSX
        tags="#product-design #ui/ux #mobile"
        title="EVENT SHARING MADE EASY"
        subtitle="Kickstarting a lightweight event-hosting and event-discovering App for Young people in NYC."
        hasVideo={true}
        thumbnail="https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        colors={[]}
        color=""
      >
        {this.state.md}
      </StyledMDJSX>
    );
  }
}

export { PIPO };
