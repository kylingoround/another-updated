import React, { Component } from "react";
import styled from "styled-components";
import MarkdownLoader from "../util/MarkdownLoader";
// import PIPOMD from "../markdowns/cyber.md";
import { Link } from "@reach/router";
import Media from "react-media";

const screenSizes = {
  mobile: 769
};

function px2rem(px) {
  return px * 0.0625;
}

const DivWithImageBG = styled.div`
  width: 100vw;
  height: 40vw;

  background-image: url("https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80");

  display: flex;
  justify-content: center;
  align-items: center;

  background-position: center center;
  background-size: cover;

  @media (max-width: ${screenSizes.mobile}px) {
    height: 80vw;
  }
`;
const BigTitle = styled.div`
  color: white;
  font-family: "IBM Plex Mono", sans-serif;
  font-weight: 700;
  font-size: ${px2rem(45)}rem;
  width: 16rem;
  text-transform: uppercase;

  @media (max-width: ${screenSizes.mobile}px) {
    font-size: ${px2rem(30)}rem;
  }
`;

const TextWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: ${screenSizes.mobile}px) {
    width: 80vw;
  }
`;

const SubtitleWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const SubtitleText = styled.div`
  font-family: "IBM Plex Mono", sans-serif;
  font-weight: 700;
  font-size: ${px2rem(27)}rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const SolidLine = styled.div`
  width: 100%;
  height: 0.4rem;
  background: black;
`;

////////////////////////////////////

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const FooterWRapper = styled.div`
  margin-top: 7rem;
`;

const CenterMeDiv = styled.div`
  margin: 0 auto;
  /* background: teal; */
  text-align: center;
`;

const DarkMe = styled(CenterMeDiv)`
  background: black;

  padding: 1rem;

  margin-bottom: 3rem;
  outline: 10px dashed black;
  outline-offset: 30px;
`;

const FlexColumnMe = styled.div`
  @media (max-width: ${screenSizes.mobile}px) {
    display: flex;
    flex-direction: column;
  }
`;

const EachNavOption = styled.span`
  font-family: "IBM Plex Mono", sans-serif;
  font-weight: 700;
  font-size: ${px2rem(65)}rem;
  text-transform: uppercase;
  margin-left: 1rem;
  margin-right: 1rem;
  color: white;
`;

const MainOption = styled.div`
  font-family: "IBM Plex Mono", sans-serif;
  font-weight: 700;
  font-size: ${px2rem(65)}rem;
  text-transform: uppercase;
  color: black;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const JustBlack = styled.div`
  background: black;
  height: 20rem;
`;

const ProjectFooter = () => (
  <FooterWRapper>
    <DarkMe>
      <FlexColumnMe>
        <StyledLink to="/cyber">
          <EachNavOption>cyber</EachNavOption>
        </StyledLink>
        <Media
          query="(min-width: 769px)"
          render={() => <EachNavOption>-</EachNavOption>}
        />
        {/* <EachNavOption>-</EachNavOption> */}
        <StyledLink to="/border">
          <EachNavOption>border</EachNavOption>
        </StyledLink>
        <Media
          query="(min-width: 769px)"
          render={() => <EachNavOption>-</EachNavOption>}
        />
        {/* <EachNavOption>-</EachNavOption> */}
        <StyledLink to="/event">
          <EachNavOption>event</EachNavOption>
        </StyledLink>
      </FlexColumnMe>
    </DarkMe>
    <CenterMeDiv>
      <StyledLink to="/">
        <MainOption>- main -</MainOption>
      </StyledLink>
    </CenterMeDiv>
    <JustBlack />
  </FooterWRapper>
);

class PIPO extends Component {
  state = { md: "# I'm loading man" };
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/kylingoround/f35d25342a880b92e7520b408730eb24/raw/57f7efa8a7ade755a3c6e076c19eb36c099d64a6/pipo.md"
    )
      .then(res => res.text())
      // .then(t => console.log(t));
      .then(t => this.setState({ md: t }));
  }
  render() {
    return (
      <>
        <DivWithImageBG>
          <BigTitle>Event sharing made easy</BigTitle>
        </DivWithImageBG>

        <TextWrapper>
          <SubtitleWrapper>
            <SolidLine />
            <SubtitleText>
              Kickstarting a lightweight event-hosting and event-discovering App
              for Young people in NYC.
            </SubtitleText>
            <SolidLine />
          </SubtitleWrapper>
          <MarkdownLoader>{this.state.md}</MarkdownLoader>
        </TextWrapper>

        <ProjectFooter />
      </>
    );
  }
}

// const PIPO = () => (
//   <>
//     <DivWithImageBG>
//       <BigTitle>Event sharing made easy</BigTitle>
//     </DivWithImageBG>

//     <TextWrapper>
//       <SubtitleWrapper>
//         <SolidLine />
//         <SubtitleText>
//           Kickstarting a lightweight event-hosting and event-discovering App for
//           Young people in NYC.
//         </SubtitleText>
//         <SolidLine />
//       </SubtitleWrapper>
//       <MarkdownLoader>{PIPOMD}</MarkdownLoader>
//     </TextWrapper>

//     <ProjectFooter />
//   </>
// );

export { PIPO };
