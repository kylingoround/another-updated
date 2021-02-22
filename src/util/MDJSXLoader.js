import React from "react";
import M2J from "markdown-to-jsx";
import styled from "styled-components";
import ResponsiveEmbed from "react-responsive-embed";
import Media from "react-media";
import ProjectFooter from "../components/UI_parts/ProjectFooter";
import ScrollToTopOnMount from "../util/ScrollToTopOnMount";

const screenSizes = {
  mobile: 769
};

const ScaleFactor = 0.8;

function px2rem(px) {
  return px * 0.0625 + "rem";
}

const themeColor = [
  "#DEF7FC",
  "#B0ECF5",
  "#7CE0EF",
  "#44D2E7",
  "#01C7E1",
  "#00BEDC",
  "#00AEC8",
  "#0099AE",
  "#008695",
  "#00636A"
];

const Redsquare = styled.div`
  width: 100%;
  height: 1.5rem;
`;

const theme = {
  // font-size
  fontSizeMainTitle: px2rem(50),
  fontSizeMainTitle_m: px2rem(35),

  fontSizeMainSubtitle: px2rem(28),
  fontSizeMainSubtitle_m: px2rem(18),

  fontSizeTags: px2rem(25),
  fontSizeTags_m: px2rem(20),

  fontSizeTitle: px2rem(48 * ScaleFactor),
  fontSizeTitle_m: px2rem(36 * ScaleFactor),

  fontSizeParagraph: px2rem(24 * ScaleFactor),
  fontSizeParagraph_m: px2rem(16),

  fontSizeHighlight: px2rem(18),
  fontSizeHighlight_m: px2rem(12),

  fontSizeSubtext: px2rem(36),
  fontSizeSubtext_m: px2rem(20),

  // font-family
  fontFamilyMono: "'IBM Plex Mono', 'Courier New', Courier, monospace",
  fontFamilySans: "'IBM Plex Sans', Arial, Helvetica, sans-serif;",

  // layout-grid
  grid_1: (5 / 13) * 100 * ScaleFactor + "%",
  grid_2: (7 / 13) * 100 * ScaleFactor + "%",
  grid_3: (10 / 13) * 100 * ScaleFactor + "%",

  grid_1_m: (5 / 13) * 100 + "%",
  grid_2_m: (7 / 13) * 100 + "%",
  grid_3_m: (10 / 13) * 100 + "%",

  // layout-gap
  gapHeader1Top: px2rem(50),
  gapHeader1Bottom: px2rem(50),

  gapParagraph: px2rem(30),
  gapSubtext: px2rem(10),

  universalMarginBottom: "2rem",
  universalMarginBottom_m: "1.6rem",

  break_1: "1rem",
  break_2: "2rem",
  break_3: "3rem",
  // colors
  colors: themeColor
};

const BasicText = styled.div`
  font-family: "IBM Plex Mono", "Courier New", Courier, monospace;
  text-align: left;
  color: black;
`;

const Header1 = styled(BasicText)`
  margin: 3rem auto 1rem auto;

  width: ${theme.grid_2};
  font-size: ${theme.fontSizeTitle};
  font-family: ${theme.fontFamilySans};
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: ${screenSizes.mobile}px) {
    width: ${theme.grid_3_m};
    margin: 2rem auto 0.5rem auto;
    font-size: ${theme.fontSizeTitle_m};
  }
`;

const ParagraphText = styled(BasicText)`
  margin: 0 auto;

  width: ${theme.grid_2};
  font-size: ${theme.fontSizeParagraph};
  font-family: ${theme.fontFamilySans};
  font-weight: 300;

  line-height: 2rem;

  margin-bottom: ${theme.universalMarginBottom};
  /* margin-top: ${theme.gapParagraph}; */
  /* margin-bottom: ${theme.gapParagraph}; */

  @media (max-width: ${screenSizes.mobile}px) {
    font-size: ${theme.fontSizeParagraph_m};
    width: ${theme.grid_3_m};

  }
`;

const HighlightTextWrapper = styled(BasicText)`
  margin: 0 auto;

  width: ${theme.grid_2};

  font-size: ${theme.fontSizeHighlight};
  font-family: ${theme.fontFamilySans};

  font-style: italic;
  font-weight: 300;
  font-style: italic;

  line-height: 2rem;

  @media (max-width: ${screenSizes.mobile}px) {
    width: ${theme.grid_3_m};
    font-size: ${theme.fontSizeHighlight_m};
  }
`;

const Flash = styled.div`
  /* width: 100%; */
  width: ${props => props.length * 0.5 + "rem"};
  max-width: 100%;
  height: 1rem;
  background: ${theme.colors[1]};
  margin-top: -1rem;
  margin-left: 1rem;
  position: relative;
  top: 2rem;
  z-index: -1;

  @media (max-width: ${screenSizes.mobile}px) {
    height: 0.8rem;
    top: 1.8rem;
    margin-left: 0.6rem;
  }
`;

const HighlightText = ({ children, ...props }) => {
  const yo = children[children.length - 1];
  let length;
  // console.log(children);
  // yo && console.log(yo.length);
  yo && (length = yo.length);
  return (
    <>
      <HighlightTextWrapper>
        <Flash length={length} />

        {children}
      </HighlightTextWrapper>
    </>
  );
};

const SectionBreak = styled.div`
  width: 100%;
  /* margin-bottom: ${theme.universalMarginBottom}; */
  height: ${theme.universalMarginBottom};

`;

const Subtext = styled(BasicText)`
  margin: 3rem auto ${theme.universalMarginBottom} auto;
  width: ${theme.grid_2};
  font-size: ${theme.fontSizeSubtext};
  font-weight: 700;

  @media (max-width: ${screenSizes.mobile}px) {
    width: ${theme.grid_3_m};
    margin: 1rem auto ${theme.universalMarginBottom_m} auto;
    font-size: ${theme.fontSizeSubtext_m};
  }
`;

const DefaultImage = styled.img`
  width: ${theme.grid_3};
  height: auto;
`;

const Image = props => {
  const ImageWrapper = styled.div`
    width: ${theme.grid_3};
    /* max-height: 23rem */
    /* height: auto; */
    margin: 0 auto ${theme.universalMarginBottom} auto;

    @media (max-width: ${screenSizes.mobile}px) {
      /* width: ${theme.grid_3_m}; */
      width: 100vw;
      margin: 0 auto ${theme.universalMarginBottom_m} auto;
    }
  `;

  const StyledImage = styled.img`
    width: 100%;
    height: auto;
  `;

  return (
    <ImageWrapper>
      <StyledImage src={props.src} alt={props.alt} />
    </ImageWrapper>
  );
};

const TwinImages = props => {
  const TwinImagesWrapper = styled.div`
    /* width: ${theme.grid_3}; */
    width: 100%;
    height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: row;
    margin: 0 auto ${theme.universalMarginBottom} auto;
  `;

  const Twin = styled.img`
    display: block;
    width: 50%;
    height: auto;
    margin-right: 2%;
  `;

  const TwinWrapper = styled.div`
    width: 50%;
    margin-right: 2%;
  `;

  const StyledImage = styled.img`
    width: 100%;
    height: auto;
  `;

  return (
    <>
      <Media queries={{ small: { maxWidth: screenSizes.mobile } }}>
        {matches =>
          matches.small ? (
            <>
              <Image src={props.left} />
              <Image src={props.right} />
            </>
          ) : (
            <TwinImagesWrapper>
              {props.left && (
                // <Twin alt={"test"} className="twin" src={props.left} />
                <TwinWrapper>
                  <StyledImage src={props.left} alt="test" />
                </TwinWrapper>
              )}
              {props.right && (
                // <Twin alt={"test"} className="twin" src={props.right} />
                <TwinWrapper>
                  <StyledImage src={props.right} alt="test" />
                </TwinWrapper>
              )}
            </TwinImagesWrapper>
          )
        }
      </Media>
    </>
  );
};

////////////////////

const StyledMDX = styled(M2J)`
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

////////////////////

const TopDecor = styled.div`
  width: ${theme.grid_3};
  height: 40px;
  background: ${theme.colors[1]};
  /* margin: 0 auto; */
  margin: 0 auto 4rem auto;
  @media (max-width: ${screenSizes.mobile}px) {
    width: 80%;
    margin: 0 auto 2rem auto;
  }
`;

const TopTags = props => {
  const TopTagWrapper = styled.div`
    margin: 0 auto;
    width: ${theme.grid_3};
    font-size: ${theme.fontSizeTags};
    font-family: ${theme.fontFamilyMono};
    text-transform: uppercase;
    font-weight: 700;
    color: ${theme.colors[5]};

    @media (max-width: ${screenSizes.mobile}px) {
      font-size: ${theme.fontSizeTags_m};
      width: ${theme.grid_3_m};
    }
  `;
  return <TopTagWrapper>{props.children}</TopTagWrapper>;
};

const MainTitle = props => {
  const MainTitleWrapper = styled.div`
    margin: 0 auto;
    width: ${theme.grid_3};
    font-size: ${theme.fontSizeMainTitle};
    font-family: ${theme.fontFamilyMono};
    font-weight: 700;
    color: ${theme.colors[5]};

    text-transform: uppercase;

    margin-bottom: 2rem;

    @media (max-width: ${screenSizes.mobile}px) {
      font-size: ${theme.fontSizeMainTitle_m};
      width: ${theme.grid_3_m};
    }
  `;
  return <MainTitleWrapper>{props.children}</MainTitleWrapper>;
};
const MainSubtitle = props => {
  const MainSubtitleWrapper = styled.div`
    margin: 1.5rem auto 1.5rem auto;
    width: ${theme.grid_3};
    font-size: ${theme.fontSizeMainSubtitle};
    font-family: ${theme.fontFamilyMono};
    font-weight: 700;

    text-transform: capitalize;

    @media (max-width: ${screenSizes.mobile}px) {
      font-size: ${theme.fontSizeMainSubtitle_m};
      width: ${theme.grid_3_m};
      font-weight: 500;
      margin: 1rem auto 1rem auto;
    }
  `;
  return <MainSubtitleWrapper>{props.children}</MainSubtitleWrapper>;
};

const NotUL = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const BulletPoint = styled.div`
  margin: 0 auto 0 auto;
  width: ${theme.grid_2};
  font-size: ${theme.fontSizeParagraph};
  font-family: ${theme.fontFamilySans};
  font-weight: 700;
  position: relative;
  left: -2.6rem;

  @media (max-width: ${screenSizes.mobile}px) {
    width: ${theme.grid_3_m};
    font-size: ${theme.fontSizeParagraph_m};
    font-weight: 500;
    left: -2.6rem;
    margin: 0 auto 0 auto;
  }
`;

const Dad = styled.div`
  width: ${theme.grid_3};
  height: auto;
  margin: 0 auto;

  @media (max-width: ${screenSizes.mobile}px) {
    width: ${theme.grid_3_m};
  }
`;
///////////////////////

const PageWrapper = styled.div`
  width: 100vw;
  max-width: ${px2rem(1440)};
  margin: 0 auto;
  @media (max-width: ${screenSizes.mobile}px) {
    overflow: hidden;
    scrollbar-width: none;
  }
`;

const ResponsiveVideo = props => {
  const Wrapper = styled.div`
    width: ${theme.grid_3};
    height: auto;
    margin: 4rem auto;

    @media (max-width: ${screenSizes.mobile}px) {
      /* width: ${theme.grid_3_m}; */
      width: 100%;
      margin: 2rem auto;
    }
  `;
  return (
    <Wrapper>
      <ResponsiveEmbed
        src={props.src + "?title=0&byline=0&portrait=0"}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="video"
      />
    </Wrapper>
  );
};

// = styled(ResponsiveEmbed)`
//   width: ${theme.grid_3};
//   margin: 2rem auto 2rem auto;
// `;

// const PageIntroTest = props => {
//   const DivWithImageBG = styled.div`
//     width: 100vw;
//     height: 40vw;

//     background-image: url("https://images.squarespace-cdn.com/content/v1/58ec7896725e25240ec4c731/1567719449020-9ZXJDLJ8933BKZZOK53E/ke17ZwdGBToddI8pDm48kMG-5A7T8BxJWMvph8YqY8MUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dgRyFqfAjKRzWQUwPJ_ZG2TvTFc9zJ2nPpuKQFrARZvpCjLISwBs8eEdxAxTptZAUg/image_preview+%2815%29.png?format=2500w");

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     background-position: center center;
//     background-size: cover;

//     @media (max-width: ${screenSizes.mobile}px) {
//       height: 80vw;
//     }
//   `;

//   const BigTitle = styled.div`
//     color: white;
//     font-family: "IBM Plex Mono", sans-serif;
//     font-weight: 700;
//     font-size: ${px2rem(45)}rem;
//     width: 16rem;
//     text-transform: uppercase;

//     @media (max-width: ${screenSizes.mobile}px) {
//       font-size: ${px2rem(30)}rem;
//     }
//   `;

//   const SolidLine = styled.div`
//     width: 100%;
//     height: 0.4rem;
//     background: black;
//   `;

//   return (
//     <div>
//       {" "}
//       <DivWithImageBG>
//         <BigTitle>OTHER BARRIERS</BigTitle>
//       </DivWithImageBG>
//     </div>
//   );
// };

const PageIntro = props => {
  // add background-image instead of background color

  let theColor;
  props.themeColor ? (theColor = props.themeColor) : (theColor = "white");
  console.log(theColor);

  const PageIntroWrapper = styled.div`
    background: black;
    height: 60vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    /* background-image: url("https://i.imgur.com/JwTHkOh.png"); */
    background-image: url(${props.thumbnail});
    background-position: center center;
    background-size: cover;

    @media (max-width: ${screenSizes.mobile}px) {
      margin-bottom: 1.5rem;
    }
  `;

  const LineBreak = styled.div`
    /* width: 100%; */
    width: ${theme.grid_3};
    margin: 0 auto;

    height: 0.4rem;
    background: black;

    @media (max-width: ${screenSizes.mobile}px) {
      width: ${theme.grid_3_m};
    }
  `;

  const PageIntroTitle = styled.div`
    width: ${theme.grid_3};

    font-size: ${theme.fontSizeMainTitle};
    font-family: ${theme.fontFamilyMono};
    font-weight: 700;

    /* color: ${theme.colors[5]}; */
    color: ${theColor};
    @media (max-width: ${screenSizes.mobile}px) {
      width: ${theme.grid_3_m};
      font-size: ${theme.fontSizeMainTitle_m};
    }
  `;

  const PageIntroTag = styled.div`
    width: ${theme.grid_3};
    margin: 0 auto;
    position: absolute;
    bottom: 1rem;
    text-transform: uppercase;

    font-size: ${theme.fontSizeTags};
    font-family: ${theme.fontFamilyMono};
    font-weight: 700;

    /* color: ${theme.colors[5]}; */
    color: ${theColor};

    @media (max-width: ${screenSizes.mobile}px) {
      width: ${theme.grid_3_m};
      font-size: ${theme.fontSizeTags_m};
    }
  `;

  console.log(props.mediaUrl + "?title=0&byline=0&portrait=0");

  return (
    <>
      <PageIntroWrapper>
        <PageIntroTitle>{props.title}</PageIntroTitle>
        <PageIntroTag>{props.tags}</PageIntroTag>
      </PageIntroWrapper>
      <LineBreak />
      <MainSubtitle>{props.subtitle}</MainSubtitle>
      <LineBreak />

      {props.mediaUrl ? (
        <ResponsiveVideo
          src={props.mediaUrl + "?title=0&byline=0&portrait=0"}
        />
      ) : null}

      {/* <div>also a video / image I guess to showoff</div> */}
    </>
  );
};

const MDJSX = props => (
  <>
    <ScrollToTopOnMount />
    <PageIntro {...props} />
    <PageWrapper>
      {/* <MainSubtitle>{props.subtitle}</MainSubtitle> */}
      <StyledMDX
        options={{
          overrides: {
            h1: Header1,
            p: ParagraphText,
            img: DefaultImage,
            ul: NotUL,
            TwinImages,
            Subtext,
            HighlightText,
            Image,
            SectionBreak,
            BulletPoint,
            ResponsiveVideo,
            Redsquare
          },
          forceBlock: true
        }}
      >
        {props.children}
      </StyledMDX>
    </PageWrapper>
    <ProjectFooter />
  </>
);

export default MDJSX;

// a good system enforces best design practices and patterns
// a better system teaches

// principle: gives an opinonated option but also supports unopinated, default options.
// - e.g. weight(opinonated because it's shorter or it's a better design term than css names) vs. font-weight (css property names)

// {
//   <ExampleFantasyUIComponent
//   font='IBM Plex Mono' // automatically fill alternatives, or just use mono
//   font={font:'mono', size:3, }
//   size='{theme-large} vs. size='large'
//   color={theme.color-3}// tone variation based on theme color, or page-theme color
//   flex='column' // if flex = false / true / column / row, by default = false
//   need_responsive_fix ={true} // if true, wrap it with a responsive div to handle iframe embedding, maybe a better name for it
//   grid={theme.grid-3}
// >and here are the stuffs</ExampleFantasyUIComponent>
// }

// also an alias configuration file

// {/* <TopDecor /> */}
// {/* <TopTags>{props.tags}</TopTags> */}
// {/* <MainTitle>{props.title}</MainTitle> */}
// {/* <Image src={props.mediaUrl} /> */}
// {/* {props.isVideo ? (
//   <Dad>
//     <ResponsiveEmbed
//       src={props.mediaUrl + "?title=0&byline=0&portrait=0"}
//       frameBorder="0"
//       allow="autoplay; fullscreen"
//       allowFullScreen
//       title="video"
//     />
//   </Dad>
// ) : (
//   <Image src={props.mediaUrl} />
// )} */}
