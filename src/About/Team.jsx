import React from "react";
import styled from "styled-components";
// import img from "./img1.PNG";
import { BsSquare } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Team = ({ name, pos, imgs }) => {
  return (
    <Fade bottom>
      <Container>
        <Image src={imgs} />
        <Name>{name} </Name>
        <Position>{pos} </Position>
        <Line></Line>
        <Box>
          <div>
            <BsSquare style={{ color: "white", fontSize: "12px" }} />
          </div>
          <div>
            <BsSquare style={{ color: "white", fontSize: "12px" }} />
          </div>
          <div>
            <BsSquare style={{ color: "white", fontSize: "12px" }} />
          </div>
        </Box>
      </Container>
    </Fade>
  );
};

export default Team;

const Container = styled.div`
  height: 380px;
  width: 300px;
  background-color: #9a0563;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  @media screen and (max-width: 765px) {
    width: 100vw;
  }
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 45px;
  object-fit: cover;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
    transition: all 350ms;
  }
  @media screen and (max-width: 765px) {
    height: 150px;
    width: 150px;
    border-radius: 50px;
  }
`;
const Name = styled.div`
  font-size: 35px;
  font-weight: bold;
`;
const Position = styled.div`
  text-align: center;
  width: 250px;
  font-size: 13px;
  @media screen and (max-width: 765px) {
    font-size: 15px;
  }
  /* background-color: #030101; */
`;
const Line = styled.div`
  width: 60px;
  border-bottom: 2px solid white;
  margin: 30px 0px;
`;
const Box = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
  transition: all 350ms;
  div {
    &:hover {
      color: gray;
    }
  }
`;
