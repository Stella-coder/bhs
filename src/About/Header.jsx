import React, { useState } from "react";
import styled from "styled-components";
import logo from "./bhslogo.PNG";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Fade from "react-reveal/Fade";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const change = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Holder>
          <Text>Home</Text>

          <Text>About Us</Text>
          <Text>Events</Text>
          <Text>Gallery</Text>
          <Text>Blog</Text>
          <Text>Contact</Text>
        </Holder>
        {toggle ? (
          <Menu onClick={change}>
            <AiOutlineClose />
          </Menu>
        ) : (
          <Menu onClick={change}>
            <AiOutlineMenu />
          </Menu>
        )}
        {toggle ? (
          <MenuHolder>
            <MText>Home</MText>
            <MText style={{ backgroundColor: "gray", color: "white" }}>
              About Us
            </MText>
            <MText>Events</MText>
            <MText>Gallery</MText>
            <MText>Blog</MText>
            <MText>Contact</MText>
          </MenuHolder>
        ) : null}
        <Button>DONATE</Button>
      </Wrapper>
    </Container>
  );
};

export default Header;

const MenuHolder = styled.div`
  display: flex;
  height: 250px;
  width: 100%;
  background-color: white;
  /* padding: 20px; */
  flex-direction: column;
  transition: all 350ms;
  @media screen and (min-width: 765px) {
    display: none;
  }
`;

const MText = styled.div`
  cursor: pointer;
  transition: all 350ms;
  padding: 10px;
  &:hover {
    color: white;
    background-color: gray;
  }
`;

const Container = styled.div`
  background-color: white;
  /* width: 100%; */
  /* height: 100%; */
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 170px;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 765px) {
    flex-direction: column;
    height: 100%;
    min-height: 300px;
  }
`;
const Logo = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  @media screen and (max-width: 765px) {
    height: 150px;
    width: 150px;
    margin: 20px 0px;
  }
`;
const Holder = styled.div`
  display: flex;

  transition: all 350ms;
  @media screen and (max-width: 765px) {
    display: none;
  }
`;
const Button = styled.div`
  background-color: #9a0563;
  /* padding: 20px;
   */
  height: 50px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  color: white;
  cursor: pointer;
  margin: 20px 0px;
`;
const Text = styled.div`
  margin-left: 10px;
  cursor: pointer;
  /* background-color: blue; */
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  transition-delay: 1s;
  &:hover {
    color: #9a0563;
    align-items: flex-start;
  }
`;

const Menu = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-weight: bold;
  margin: 20px 0px;
  /* font-size: 25px; */
  @media screen and (min-width: 765px) {
    display: none;
  }
`;
