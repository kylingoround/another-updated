import React, { Component } from "react";
import M2J from "markdown-to-jsx";
import styled from "styled-components";

const screenSizes = {
  mobile: 769
};

function px2rem(px) {
  return px * 0.0625;
}

const H1 = styled.h1`
  color: black;
  text-align: left;
  font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;
  font-size: ${px2rem(25)}rem;
  font-weight: 700;
`;

const H2 = styled.h2`
  text-align: left;
  font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;
  font-size: ${px2rem(20)}rem;
  font-weight: 700;
`;

const H3 = styled.h2`
  text-align: left;
  font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;
  font-size: ${px2rem(20)}rem;
  font-weight: 700;
`;

const PP = styled.div`
  text-align: left;
  font-size: ${px2rem(25)}rem;
  font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 300;

  @media (max-width: ${screenSizes.mobile}px) {
    font-size: ${px2rem(18)}rem;
  }
`;

const Img = styled.img`
  /* max-height: 20vh; */
  width: 100%;
  height: auto;
`;

const Markdown = props => (
  <M2J
    options={{
      overrides: {
        h1: H1,
        h2: H2,
        h3: H3,
        img: Img,
        p: PP
      },
      forceBlock: true
    }}
  >
    {props.children}
  </M2J>
);

export default Markdown;
