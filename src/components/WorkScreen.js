import React from "react";
import styled from "styled-components";
// import { Link } from "@reach/router";
import { Link } from "react-router-dom";

const screenSizes = {
  mobile: 769
};
function px2rem(px) {
  return px * 0.0625;
}

const SectionWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${screenSizes.mobile}px) {
    height: 80vh;
  }
`;

const CenterFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const HorizentalFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const MenuWrapper = styled.div`
  width: ${px2rem(422)}rem;
  /* width: ${px2rem(300)}rem; */
  height: ${px2rem(386)}rem;
  margin-right: ${px2rem(60)}rem;
  border: solid 8px black;
  position: relative;

  @media (max-width: ${screenSizes.mobile}px) {
    width: ${px2rem(300)}rem;
    margin:0;
  }
`;

const MenuOptionWrapper = styled.div`
  width: ${px2rem(200)}rem;
  overflow: visible;
  white-space: nowrap;
`;

const ScreenWrapper = styled.div`
  width: ${px2rem(550)}rem;
  height: ${px2rem(400)}rem;
  @media (max-width: ${screenSizes.mobile}px) {
    /* width: ${px2rem(350)}rem; */
    display: none  
  }
`;

const Img = styled.img`
  width: ${px2rem(550)}rem;
  height: ${px2rem(300)}rem;
  border: solid 8px black;
  object-fit: cover;
`;

const MenuTitle = styled.div`
  position: absolute;
  top: -${px2rem(40)}rem;
  left: ${px2rem(45)}rem;
  font-family: "IBM Plex Mono", "Courier New", Courier, monospace;
  font-weight: 700;
  font-size: ${px2rem(60)}rem;
  color: #613fe3;
`;
const MenuText = styled.div`
  font-family: Montserrat, Helvetica, sans-serif;
  font-weight: 700;
  font-size: ${px2rem(45)}rem;
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const ScreenTitle = styled.div`
  font-family: "IBM Plex Mono", "Courier New", Courier, monospace;
  font-size: ${px2rem(35)}rem;
  margin-top: 0.4rem;
  font-weight: 700;
`;
const ScreenSubtitle = styled.div`
  font-family: "IBM Plex Mono", "Courier New", Courier, monospace;
  font-size: ${px2rem(35)}rem;
`;

const Spam = styled.span`
  /* margin-left: 0.5rem; */
  margin-right: 2rem;
`;

const MenuGroup = (props) => (
  <MenuWrapper>
    <MenuTitle>ENTRÉE</MenuTitle>
    {/* <MenuTitle>MENU</MenuTitle> */}

    <CenterFlex>
      <MenuOptionWrapper>
        <MenuText
          onMouseEnter={() => props.handleMouseEnter("game")}
          onMouseLeave={props.handleMouseLeave}
        >
          <StyledLink to={"/game"}>
            {props.currentProject === "game" ? "> GAME" : "GAME"}
          </StyledLink>
        </MenuText>

        {/* <MenuText
          onMouseEnter={() => props.handleMouseEnter("kiosk")}
          onMouseLeave={props.handleMouseLeave}
        >
          <StyledLink to={"/kiosk"}>
            {props.currentProject === "kiosk" ? "> KIOSK" : "KIOSK"}
          </StyledLink>
        </MenuText> */}

        <MenuText
          onMouseEnter={() => props.handleMouseEnter("cyber")}
          onMouseLeave={props.handleMouseLeave}
        >
          <StyledLink to={"/cyber"}>
            {props.currentProject === "cyber" ? "> Cyber" : "Cyber"}
          </StyledLink>
        </MenuText>

        <MenuText
          onMouseEnter={() => props.handleMouseEnter("pipo")}
          onMouseLeave={props.handleMouseLeave}
        >
          <StyledLink to={"/pipo"}>
            {props.currentProject === "pipo" ? "> PIPO" : "PIPO"}
          </StyledLink>
        </MenuText>

        {/* <MenuText
          onMouseEnter={() => props.handleMouseEnter("event")}
          onMouseLeave={props.handleMouseLeave}
        >
          <StyledLink to={"/event"}>
            {props.currentProject === "event" ? "> event" : "event"}
          </StyledLink>
        </MenuText> */}

        <MenuText
          onMouseEnter={() => props.handleMouseEnter("hamsa")}
          onMouseLeave={props.handleMouseLeave}
        >
          <StyledLink to={"/hamsa"}>
            {props.currentProject === "hamsa" ? "> hamsa" : "hamsa"}
          </StyledLink>
        </MenuText>

        <MenuText
          onMouseEnter={() => props.handleMouseEnter("border")}
          onMouseLeave={props.handleMouseLeave}
        >
          <StyledLink to={"/border"}>
            {props.currentProject === "border" ? "> border" : "border"}
          </StyledLink>
        </MenuText>
      </MenuOptionWrapper>
    </CenterFlex>
  </MenuWrapper>
);

const ScreenGroup = (props) => {
  const { projects, currentProject } = props;
  let data;
  projects[currentProject]
    ? (data = projects[currentProject])
    : (data = projects["default"]);
  // console.log(data);

  const { title, subtitle, thumbnail } = data;

  return (
    <ScreenWrapper>
      <Img src={thumbnail} />
      <ScreenTitle>{title}</ScreenTitle>
      <ScreenSubtitle>
        {subtitle &&
          subtitle.map((d, i) => <Spam key={title + "-tag-" + i}>{d}</Spam>)}
      </ScreenSubtitle>
    </ScreenWrapper>
  );
};

class WorkScreen extends React.Component {
  state = {
    projects: {
      default: {
        title: "Select a project.",
        subtitle: ["*"],
        thumbnail:
          "https://media1.tenor.com/images/5a934e84f67d2a61a118ec95b1d6cb74/tenor.gif?itemid=11312357"
      },
      game: {
        title: "Do Gamers Dream of Customer Support?",
        subtitle: ["IA", "service-design", "prototype", "mobile-first"],
        thumbnail:
          "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
      },
      kiosk: {
        title: "Fifty Work Evenlopes of Fast-food Kiosk",
        subtitle: ["kiosk", "accessibility", "prototype", "user-test"],
        thumbnail:
          "https://images.unsplash.com/photo-1536689318884-9ee850c4c095?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHZlbmRpbmclMjBtYWNoaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
      },
      cyber: {
        title: "Design A Humane Dashboard",
        subtitle: ["product", "data-viz", "ui/ux"],
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/58ec7896725e25240ec4c731/1562648106933-FFOQ30HRGF252WPDXQN0/ke17ZwdGBToddI8pDm48kDBWDBfmefj1gvev6A5_eqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0o0Xp6UE5J-58PsGFefGLoY1T7k9l5G9NNniEsQShCnRKTdOMGvLMHUO8X0cWJJEWQ/image-asset.png?format=2500w"
      },
      pipo: {
        title: "Event Sharing Made Easy",
        subtitle: ["mobile", "product", "ui / ux"],
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/58ec7896725e25240ec4c731/1562648429190-0V0O4NMFUKBR4596GG9B/ke17ZwdGBToddI8pDm48kK-6VZ_A-mpZPnQ1J7WFaxp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwD1g8DYbkhCsgrhnj8CXZYCD5bU3QvC-q6Z8ONLSlwiQbJQ0xI_XvgfUfYGy5Dpw/image-asset.jpeg?format=2500w"
      },
      border: {
        title: "Barriers Around the Globe",
        subtitle: ["data-viz", "ui", "react"],
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/58ec7896725e25240ec4c731/1567718793437-S88LO15YMEO24TPY77FJ/ke17ZwdGBToddI8pDm48kD_oGUSWuRp2jXjuKEQV3nl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0uQP4rKL2DzwDpL_8M-uv2Gv99tjoV7T51jwj8udRhacRyaqVe9S8fkIl1jipwHGaw/image-asset.png?format=2500w"
      },
      event: {
        title: "Enterprise Event Website",
        subtitle: ["website", " ui / ux"],
        thumbnail:
          "https://images.squarespace-cdn.com/content/v1/58ec7896725e25240ec4c731/1565892149769-4YBP3UW914Q6VLMGA59K/ke17ZwdGBToddI8pDm48kK-6VZ_A-mpZPnQ1J7WFaxp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwD1g8DYbkhCsgrhnj8CXZYCD5bU3QvC-q6Z8ONLSlwiQbJQ0xI_XvgfUfYGy5Dpw/Cover.jpg"
      },
      hamsa: {
        title: "VR Social Experience",
        subtitle: ["vr", "storytelling"],
        thumbnail:
          "https://paper-attachments.dropbox.com/s_CFBDD9739A2ECAB00497FDAB8CA03E62FDFD5049DCDDAC1534608614F1738AD5_1569166297521_image.png"
      }
    },
    currentProject: "default"
  };
  handleMouseEnter = (d) => d && this.setState({ currentProject: d });
  handleMouseLeave = () => this.setState({ currentProject: "default" });
  handleMouseClick = (d) => d && this.setState({ currentProject: d });
  componentDidUpdate() {}
  render() {
    const { projects, currentProject } = this.state;
    return (
      <SectionWrapper id="works">
        <HorizentalFlex>
          <MenuGroup
            handleMouseEnter={this.handleMouseEnter}
            handleMouseLeave={this.handleMouseLeave}
            handleMouseClick={this.handleMouseClick}
            currentProject={currentProject}
          />
          <ScreenGroup currentProject={currentProject} projects={projects} />
        </HorizentalFlex>
      </SectionWrapper>
    );
  }
}

export { WorkScreen };
