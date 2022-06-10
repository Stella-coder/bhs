import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Container>
      <Wrapper></Wrapper>

      <About>
        <Wrap>
          <Text1>A FEW WORDS</Text1>
          <Text2>About Us</Text2>
        </Wrap>
      </About>
    </Container>
  );
};

export default AboutUs;

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url("./bhslogo.PNG");
  display: flex;
  object-fit: cover;
  background-size: 100vh;
  background-repeat: no-repeat;
  background-position: fixed;
  justify-content: center;
  /* background-color: blue; */
  object-fit: cover;
  position: fixed;
  z-index: -1;
  margin-top: -170px;
  @media screen and (max-width: 765px) {
    position: relative;
    height: 500px;
    margin: 0px;
    /* background-color: red; */
    height: 250px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
  @media screen and (max-width: 765px) {
    margin-left: 30px;
  }
`;

const About = styled.div`
  width: 100%;
  height: 60vh;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;

  @media screen and (max-width: 765px) {
    height: 250px;
    position: absolute;
    margin-top: -250px;
  }
`;

const Text1 = styled.div`
  letter-spacing: 2px;
  font-size: 12px;
`;
const Text2 = styled.div`
  font-size: 100px;
  /* font-weight: bold; */
  @media screen and (max-width: 765px) {
    font-size: 70px;
  }
`;
