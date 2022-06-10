import React from "react";
import styled from "styled-components";
import img from "./bhslogo.PNG";
import { BsDot } from "react-icons/bs";
import { FaFacebookF, FaWikipediaW } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineGooglePlus } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Address>
          <Logo src={img} />
          <div>Head Office</div>
          <div>Nigeria</div>
          <div>Tel: +234 802 378 4947</div>
        </Address>
        <Pages>
          <Header>Pages</Header>
          <Holder>
            <Text>
              <div>
                <BsDot />
              </div>
              <span>Blog</span>
            </Text>
            <Text>
              <div>
                <BsDot />
              </div>
              <span>Sample Page</span>
            </Text>
            <Text>
              <div>
                <BsDot />
              </div>
              <span>Gallery</span>
            </Text>
            <Text>
              <div>
                <BsDot />
              </div>
              <span>Events</span>
            </Text>
            <Text>
              <div>
                <BsDot />
              </div>
              <span>What We Do</span>
            </Text>
            <Text>
              <div>
                <BsDot />
              </div>
              <span>Contact</span>
            </Text>
            <Text>
              <div>
                <BsDot />
              </div>
              <span>About Us</span>
            </Text>
            <Text>
              <div>
                <BsDot />
              </div>
              <span>Home</span>
            </Text>
          </Holder>
        </Pages>
        <Sub>
          <SubText>Subscribe to our newsletter</SubText>
          <Hold>
            <Input>
              <input placeholder="Email" />
            </Input>
            <Button>SEND</Button>
          </Hold>

          <IconHolder>
            <Icon>
              <FaFacebookF style={{ color: "white" }} />
            </Icon>
            <Icon style={{ backgroundColor: "#1DA1F2" }}>
              <AiOutlineTwitter style={{ color: "white" }} />
            </Icon>
            <Icon style={{ backgroundColor: "#DD4B39" }}>
              <AiOutlineGooglePlus style={{ color: "white" }} />
            </Icon>
            <Icon>
              <FaWikipediaW style={{ color: "white" }} />
            </Icon>
          </IconHolder>
        </Sub>
      </Wrapper>

      <Last>
        © 2021 Broken Home Survivors (BHS) Africa. All right reserved. Designed
        by Globalheirs
      </Last>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
width:100%;
display:flex:
justify-content:center;
font-size:14px;
background-color:white;
padding: 20px 0px;
@media screen and (max-width: 765px) {
  font-size:13px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 765px) {
    flex-direction: column;
  }
`;
const Last = styled.div`
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: gray;
  margin: 20px 0px;
  padding: 10px;
  text-align: center;
`;
const Address = styled.div`
  margin: 20px 10px;
`;
const Pages = styled.div`
  margin: 10px;
`;
const Sub = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Input = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 5px;
  input {
    width: 280px;
    outline: none;
    border: none;
  }

  @media screen and (max-width: 765px) {
    width: 95%;
    input {
      width: 98%;
    }
  }
`;
const SubText = styled.div``;
const Hold = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 765px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Button = styled.div`
  display: flex;
  width: 130px;
  height: 50px;
  background-color: #9a0563;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  color: white;
  letter-spacing: 2px;
  margin: 10px 10px;
  cursor: pointer;
`;
const IconHolder = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #21759b;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 19px;
`;
const Logo = styled.img``;
const Header = styled.div`
  font-size: 25px;
`;
const Holder = styled.div`
  margin: 10px 20px;
`;
const Text = styled.div`
  display: flex;
  align-items: center;

  div {
    font-size: 18px;
    font-weight: bold;
    color: gray;
  }
  span {
    margin-left: 10px;
    &:hover {
      color: #9a0563;
    }
  }
`;
