import React from "react";
import styled from "styled-components";
import HoverDiv from "./UI_parts/HoverDiv";

// global stuff
// showGuide
// fixed div height (3rem)

const showGuide = false;
// const showGuide = true;

const PageWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DivWithWidth = styled.div`
  width: 15em;
  overflow: visible;
  ${showGuide && `background: orange;`}
`;

const DivWithHeight = styled.div`
  height: 3rem;
`;

const HiddenDivWrapper = styled.div`
  position: absolute;
  width: 80vw;
  height: 80vh;
  background-image: url("https://images.squarespace-cdn.com/content/v1/58ec7896725e25240ec4c731/1562648106933-FFOQ30HRGF252WPDXQN0/ke17ZwdGBToddI8pDm48kDBWDBfmefj1gvev6A5_eqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0o0Xp6UE5J-58PsGFefGLoY1T7k9l5G9NNniEsQShCnRKTdOMGvLMHUO8X0cWJJEWQ/image-asset.png?format=2500w");
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

class Works extends React.Component {
  render() {
    return (
      <PageWrapper>
        {/* <HiddenDivWrapper /> */}
        <DivWithWidth>
          <HoverDiv normal="CYBER" hovered="> CYBER" />
          <HoverDiv normal="PIPO" hovered="> PIPO" />
          <HoverDiv normal="MAGICAM" hovered="> MAGICAM" />
          <HoverDiv normal="BORDER" hovered="> BORDER" />
        </DivWithWidth>
      </PageWrapper>
    );
  }
}

export { Works };
