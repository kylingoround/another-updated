import React from "react";
import styled from "styled-components";
import pdf from "../assets/kylin_resume_2021.pdf";

const screenSizes = {
  mobile: 769
};

function px2rem(px) {
  return px * 0.0625;
}

const PageWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${screenSizes.mobile}px) {
    height: 110vh;
  }
`;

const Limiter = styled.div`
  width: 31rem;
  @media (max-width: ${screenSizes.mobile}px) {
    /* width: 18rem; */
    width: 80vw;
  }
`;

const Title = styled.div`
  font-size: ${px2rem(25)}rem;
  font-family: "IBM Plex Mono", "Courier New", Courier, monospace;
  margin-bottom: 2rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const Text = styled.div`
  font-size: ${px2rem(20)}rem;
  @media (max-width: ${screenSizes.mobile}px) {
    font-size: ${px2rem(18)}rem;
  }

  font-family: "IBM Plex Sans", "Courier New", Courier, monospace;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Hyper = styled.a`
  font-size: ${px2rem(22)}rem;
  @media (max-width: ${screenSizes.mobile}px) {
    font-size: ${px2rem(20)}rem;
  }
  font-family: "IBM Plex Mono", "Courier New", Courier, monospace;
  margin-right: 2rem;
  color: black;
`;

console.log(pdf);

const About = () => (
  <PageWrapper id="about">
    <Limiter>
      <Title>About Me</Title>
      <Text>
        My name is Kylin Chen and I am a product / experience designer. With
        backgrounds from business, design and technology, and experiences from
        the start-up world, I excel at product strategies and UX operations. I
        value both innovation and execution and I think about creating impacts
        before fixating pixels. I streamline complex process into bite-size
        actions but I also love creating something novel and silly.
      </Text>
      <Text>
        Currently in love with typography, design system, sci-fi (Snow Crush,
        not Hunger Games) and tacos.
      </Text>
      <Hyper
        href="https://www.dropbox.com/s/todwred0f4jql21/kylin_resume_2021.pdf?dl=0"
        target="_blank"
      >
        Resume
      </Hyper>
      <Hyper href="https://www.linkedin.com/in/kylinc/" target="_blank">
        linkedin
      </Hyper>
      <Hyper href="https://www.behance.net/flatroom" target="_blank">
        behance
      </Hyper>
      <Hyper href="https://codepen.io/Kylin/pens/" target="_blank">
        codepen
      </Hyper>
      <Text>Always love feedbacks or just to connect:</Text>
      <Hyper>kylingoround@gmail.com</Hyper>
    </Limiter>
  </PageWrapper>
);

export { About };
// export default About;
