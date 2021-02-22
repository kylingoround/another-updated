import React, { Component } from "react";
import styled from "styled-components";
// import ReactMarkdown from "react-markdown";

import MarkdownLoader from "../util/MarkdownLoader";
// import CyberMD from "../markdowns/cyber.md";
import { Link } from "@reach/router";
import Media from "react-media";

// console.log(CyberMD.toString())
// @media (max-width: ${screenSizes.mobile}px) {
//   font-size: ${px2rem(18)}rem;
// }

const screenSizes = {
  mobile: 769
};

function px2rem(px) {
  return px * 0.0625;
}

const DivWithImageBG = styled.div`
  width: 100vw;
  height: 40vw;
  background-image: url("https://i.imgur.com/JwTHkOh.png");

  /* background-size: 100% auto; */
  /* background-size: auto 100%; */

  background-position: center center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${screenSizes.mobile}px) {
    height: 80vw;
  }
`;

const BigTitle = styled.div`
  color: white;
  font-family: "IBM Plex Mono", sans-serif;
  font-weight: 700;
  font-size: ${px2rem(45)}rem;
  width: 14rem;
  @media (max-width: ${screenSizes.mobile}px) {
    font-size: ${px2rem(30)}rem;
  }
`;

const TextWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: ${screenSizes.mobile}px) {
    /* font-size: ${px2rem(30)}rem; */
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
  @media (max-width: ${screenSizes.mobile}px) {
    font-size: ${px2rem(20)}rem;
  }
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
  /* padding-top: 1rem; */
  /* padding-bottom: 1rem; */

  padding: 1rem;
  /* background: teal; */
  /* border: 10px dotted black; */
  margin-bottom: 3rem;
  outline: 10px dashed black;
  outline-offset: 30px;
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

// const CoolDottedLine = styled.div`
//   border: 2px dotted black;
//   height: 2rem;
// `;

const JustBlack = styled.div`
  background: black;
  height: 20rem;
`;

const FlexColumnMe = styled.div`
  @media (max-width: ${screenSizes.mobile}px) {
    display: flex;
    flex-direction: column;
  }
`;

const ProjectFooter = () => (
  <FooterWRapper>
    <DarkMe>
      <FlexColumnMe>
        <StyledLink to="/pipo">
          <EachNavOption>pipo</EachNavOption>
        </StyledLink>
        {/* <EachNavOption>-</EachNavOption> */}
        <Media
          query="(min-width: 769px)"
          render={() => <EachNavOption>-</EachNavOption>}
        />
        <StyledLink to="/border">
          <EachNavOption>border</EachNavOption>
        </StyledLink>
        {/* <EachNavOption>-</EachNavOption> */}
        <Media
          query="(min-width: 769px)"
          render={() => <EachNavOption>-</EachNavOption>}
        />
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

class Cyber extends Component {
  state = { md: "# I'm loading man" };
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/kylingoround/f35d25342a880b92e7520b408730eb24/raw/d1a6be5f63d1a675b27849bad19a7390f7363704/cyber.md"
    )
      .then(res => res.text())
      // .then(t => console.log(t));
      .then(t => this.setState({ md: t }));
  }
  render() {
    return (
      <>
        <DivWithImageBG>
          <BigTitle>BUILDING A HUMANE DASHBOARD</BigTitle>
        </DivWithImageBG>

        <TextWrapper>
          <SubtitleWrapper>
            <SolidLine />
            <SubtitleText>
              Building Transparent and Trustable A.I. Dashboard for
              Cybersecurity Operators
            </SubtitleText>
            <SolidLine />
          </SubtitleWrapper>
          {/* <MarkdownLoader>{CyberMD}</MarkdownLoader> */}
          <MarkdownLoader>{this.state.md}</MarkdownLoader>

          {/* <MarkdownLoader source='http://kylinchen.design/cyber/static/media/cyber.55919798.md'/> */}
        </TextWrapper>
        <ProjectFooter />
      </>
    );
  }
}

export { Cyber };
// export default Cyber;

// # Creating A Humane Dashboard

// ![](https://paper-attachments.dropbox.com/s_9FCB84EFBC580CB5605114E61EA103B6902650A4F0886287613E54B90E99A86C_1566182233328_cyber-banner.png)

// ## Building Transparent and Trustable A.I. Dashboard for Cybersecurity Operators
