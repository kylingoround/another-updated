import React from "react";
import styled from "styled-components";

const AbsoluteWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;
const SolidRect = styled.div`
  width: 20rem;
  height: 28rem;
  background: black;
`;

const EmptyRect = styled.div`
  width: 20rem;
  height: 28rem;
  border: 5px solid black;
  background: transparent;
`;

const BigRect = styled.div`
  width: 20rem;
  height: 28rem;
  ${props =>
    props.isHovered ? `background: black;` : `border: 5px solid black;`}
`;

// {props.isHovered ? <SolidRect /> : <EmptyRect />}

const JustRect = props => (
  <AbsoluteWrapper>
    <BigRect isHovered={props.isHovered} />
  </AbsoluteWrapper>
);

export default JustRect;
