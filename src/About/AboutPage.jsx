import React from "react";
import Header from "./Header";
import styled from "styled-components";
import logo from "./bhslogo.PNG";
import AboutUs from "./AboutUs";
import History from "./History";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <Container>
      <Header />
      {/* <Wrapper></Wrapper> */}
      <AboutUs />

      <History />
      <Footer />
    </Container>
  );
};

export default AboutPage;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: "Poppins", Sans-serif;
`;

const Wrap = styled.div`
  display: flex;
  /* position: absolute; */
  /* top: 1000px; */
  z-index: 1000000;
`;
