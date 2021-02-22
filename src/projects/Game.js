import React, { Component } from "react";
import styled from "styled-components";

// import MDJSX from "../util/MDJSXLoader";
import MDJSX from "../util/MDLoaderSecret";

const StyledMDJSX = styled(MDJSX)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Game extends Component {
  state = { md: "# I'm loading man" };
  componentDidMount() {
    fetch("/assets/markdowns/game.md")
      .then((res) => res.text())
      .then((t) => this.setState({ md: t }));
  }
  render() {
    return (
      <>
        <StyledMDJSX
          tags="# service design # information-architecture # prototype # mobile-first"
          title="DO GAMERS DREAM OF CUSTOMER SERVICE?"
          subtitle="Reinventing Customer Experience in Gaming"
          hasVideo={true}
          // mediaUrl="https://player.vimeo.com/video/298942394"
          thumbnail={require("../assets/game_test_bg_small.jpg")}
          // thumbnail="https://i.imgur.com/JwTHkOh.png"
        >
          {this.state.md}
        </StyledMDJSX>
      </>
    );
  }
}

export { Game };
