import React from "react";
import styled from "styled-components";
// import { Link } from "@reach/router";
import { Link } from "react-router-dom";

import Media from "react-media";

const screenSizes = {
  mobile: 769
};

function px2rem(px) {
  return px * 0.0625;
}
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
        <StyledLink to="/border">
          <EachNavOption>border</EachNavOption>
        </StyledLink>
        <Media
          query="(min-width: 769px)"
          render={() => <EachNavOption>-</EachNavOption>}
        />
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

export default ProjectFooter;
