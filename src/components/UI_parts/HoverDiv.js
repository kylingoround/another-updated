import React from "react";
import styled from "styled-components";

const showGuide = false;
// const showGuide = true;

const BoldText = styled.div`
  font-family: Montserrat, Helvetica, sans-serif;
  font-weight: 900;
  font-size: 2.5rem;
  text-transform: uppercase;
`;

const Flex = styled.div`
  height: 3rem;
  display: flex;
  flex-direction: row;

  ${showGuide && `background: yellow;`}

  overflow: visible;
  white-space: nowrap;
`;

const Left = styled.div`
  margin-left: -5rem;
  ${showGuide &&
    `background: green;`} /* justify-content: center; */
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Right = styled.div`
  /* width: 10rem; */
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
`;

const Tag = styled.div`
  width: 5rem;
  font-family: "IBM Plex Mono", "Courier New", Courier, monospace;
`;

const DivWithHeight = styled.div`
  height: 3rem;
`;

class HoverDiv extends React.Component {
  state = {
    isHovered: false,
    normal: "normal",
    hovered: "hovered",
    tags: [],
    tagline: "this is a tagline"
  };
  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };
  componentDidMount() {
    this.props.hovered &&
      this.setState({
        normal: this.props.normal,
        hovered: this.props.hovered
      });
  }
  render() {
    const { isHovered, normal, hovered } = this.state;
    return (
      <DivWithHeight
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {isHovered ? (
          <Flex>
            {/* <Left>
              <Tag>tag1</Tag>
              <Tag>tag2</Tag>
              <Tag>tag3</Tag>
              <Tag>tag4</Tag>
            </Left> */}
            <BoldText>{hovered}</BoldText>
            {/* <Right>something extra</Right> */}
          </Flex>
        ) : (
          // <DivWithHeight>
          <BoldText>{normal}</BoldText>
          // </DivWithHeight>
        )}
      </DivWithHeight>
    );
  }
}

export default HoverDiv;
