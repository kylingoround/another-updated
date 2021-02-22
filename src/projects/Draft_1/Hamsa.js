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

  background-image: url("https://images.unsplash.com/photo-1500206329404-5057e0aefa48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9");

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
        <StyledLink to="/pipo">
          <EachNavOption>pipo</EachNavOption>
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

class Hamsa extends Component {
  state = { md: "# I'm loading man" };
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/kylingoround/244ee4597536fa8caaac965428ffbe2e/raw/9b575ac368f631b660f4ea5ec2a844b72edd4906/Hamsa.md"
    )
      .then(res => res.text())
      // .then(t => console.log(t));
      .then(t => this.setState({ md: t }));
  }
  render() {
    return (
      <>
        <DivWithImageBG>
          <BigTitle>Becoming a Genie to Your VR Friend</BigTitle>
        </DivWithImageBG>

        <TextWrapper>
          <SubtitleWrapper>
            <SolidLine />
            <SubtitleText>
              Using gesture-control to pair up monitor and VR headset in a
              hybrid social experience
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

export { Hamsa };
