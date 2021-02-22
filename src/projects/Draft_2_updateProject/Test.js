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
      .then(res => res.text())
      // .then(t => console.log(t));
      .then(t => this.setState({ md: t }));
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

// import {
//   DivWithImageBG,
//   BigTitle,
//   TextWrapper,
//   SubtitleText,
//   SubtitleWrapper,
//   SolidLine,
//   StyledLink,
//   FooterWRapper,
//   DarkMe,
//   FlexColumnMe,
//   EachNavOption,
//   MainOption,
//   JustBlack
// } from "../components/UI_parts/projects/projects";

// {
//   /* <DivWithImageBG img="https://images.unsplash.com/photo-1500206329404-5057e0aefa48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9">
//           <BigTitle>Becoming a Genie to Your VR Friend</BigTitle>
//         </DivWithImageBG> */
// }

// {
//   /* <TextWrapper>
//           <SubtitleWrapper>
//             <SolidLine />
//             <SubtitleText>
//               Using gesture-control to pair up monitor and VR headset in a
//               hybrid social experience
//             </SubtitleText>
//             <SolidLine />
//           </SubtitleWrapper>
//           <MDJSX>{this.state.md}</MDJSX>
//         </TextWrapper> */
// }
