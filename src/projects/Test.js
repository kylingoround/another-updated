import React, { Component } from "react";
import styled from "styled-components";

import MDJSX from "../util/MDJSXLoader";

// const MDXWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

const StyledMDJSX = styled(MDJSX)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Test extends Component {
  state = { md: "# I'm loading man" };
  componentDidMount() {
    fetch("/assets/markdowns/hamsa.md")
      .then((res) => res.text())
      // .then(t => console.log(t));
      .then((t) => this.setState({ md: t }));
  }
  render() {
    return (
      <>
        <div />
        <StyledMDJSX class="showme">{this.state.md}</StyledMDJSX>
      </>
    );
  }
}

export { Test };
