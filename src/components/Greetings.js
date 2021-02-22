import React from "react";
import styled from "styled-components";
import JustRect from "./UI_parts/JustRect";
import Toggable from "../util/Toggable";

const screenSizes = {
  mobile: 769
};

const PageWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${screenSizes.mobile}px) {
    height: 80vh;
  }
`;

const MonoText = styled.div`
  font-family: "IBM Plex Mono", "Courier New", Courier, monospace;
  font-weight: 700;
  font-size: 2.815rem;
  text-align: center;
  color: ${(props) => (props.isHovered ? `white` : `black`)};
`;

const ChillA = styled.a`
  text-decoration: none;
`;

const CenterPiece = (props) => (
  <div>
    <MonoText {...props}>-------</MonoText>
    <MonoText {...props}>KYLIN--</MonoText>
    <MonoText {...props}>DESIGNS</MonoText>
    <MonoText {...props}>-------</MonoText>
    <ChillA href="#works">
      <Toggable
        positive={<MonoText {...props}>{"> WORKS <"}</MonoText>}
        negative={<MonoText {...props}>WORKS</MonoText>}
      />
    </ChillA>
    <ChillA href="#about">
      <Toggable
        positive={<MonoText {...props}>{"> ABOUT <"}</MonoText>}
        negative={<MonoText {...props}>ABOUT</MonoText>}
      />
    </ChillA>
    {/* <MonoText {...props}>WORKS</MonoText> */}
    {/* <MonoText {...props}>ABOUT</MonoText> */}
    <MonoText {...props}>-------</MonoText>

    {/* <div>maybe social links</div> */}
  </div>
);

class Greetings extends React.Component {
  state = {
    isHovered: false
  };
  handleHovered = (d) => {
    this.setState({ isHovered: d });
    // console.log(this.state);
  };
  // handleHovered = () => {
  //   this.setState({ isHovered: !this.state.isHovered });
  //   console.log(this.state);
  // };
  render() {
    return (
      <PageWrapper id="main">
        <JustRect isHovered={this.state.isHovered} />
        <div
          // onMouseEnter={this.handleHovered}
          // onMouseLeave={this.handleHovered}
          onMouseEnter={() => this.handleHovered(true)}
          onMouseLeave={() => this.handleHovered(false)}
        >
          <CenterPiece isHovered={this.state.isHovered} />
        </div>
      </PageWrapper>
    );
  }
}

export { Greetings };
