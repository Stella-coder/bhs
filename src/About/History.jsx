import React from "react";
import styled from "styled-components";
import img from "./img1.PNG";

import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import Team from "./Team";
import { AiFillStar } from "react-icons/ai";
import Fade from "react-reveal/Fade";

// import ImPlus from "react-icons/im";

const History = () => {
  return (
    <Container>
      <Wrapper>
        <Wrap>
          <Text>HISTORY</Text>
          <Text2>How it all started</Text2>
        </Wrap>
      </Wrapper>

      <Story>
        <BrandStory>
          <Fade bottom>
            <Topic>BRAND STORY</Topic>
            <SText1>
              I was 8 when my parents separated. It didn’t dawn on me then the
              challenges I was going to encounter when I joyfully decided to go
              with my mum. I thought every thing will go back to normal but I
              didn’t know the challenges I was set to encounter.
            </SText1>
            <SText2>
              After change of school/environment, I noticed I began to perform
              badly in school, low self esteem creeped in, I loved isolation so
              i became a prey to pedophiles…thankfully, I was street smart so i
              saved my self. As i grew, i began to think of ways to help people
              from broken homes. i searched for resources and couldn’t find any
              to make me know i’m not alone. So as i grew much older, i began to
              strategize on how to help people like me and the ones who their
              parents didn’t have the courage to part ways yet enduring abuse.
              Meanwhile, my major plan was to only help the kids but i later on
              discovered that mentoring and sponsoring these kids in school
              wouldn’t help make them better if we do not equally sensitize the
              parent or guardian on how to create an emotionally available
              atmosphere for them hence the Birth of The Single Families
              Project.
            </SText2>
          </Fade>
        </BrandStory>

        <Image src={img} />
      </Story>
      {/* <Fade> */}
      <Founder>
        <FText>
          <Wrap>
            <Text2>Founder's Vision</Text2>
            <SText1>
              I see a lot of children & young adults from Broken Homes who are
              ready and willing to become a better version of themselves. We are
              raising an army of survivors who are Self-Aware, Confident and
              Determined. We are changing the narrative about us, spreading
              love, showing people that having healthy marriages is possible,
              being successful is possible, our environments or parents failed
              marriages doesn’t define us
            </SText1>
            <SText2>
              Majority of kids found on the streets are from dysfunctional
              families, we want to remove them from the streets and invest in
              their education. We seek to provide career & business
              opportunities for the adults & single parents We seek to conduct
              sensitization workshops and provide resources to make sure they
              are mentally sound & productive. But we can’t do this alone, we
              need you.
            </SText2>
          </Wrap>
        </FText>

        <FImage src={img2} />
      </Founder>
      {/* </Fade> */}

      <TeamHeader>Our Team</TeamHeader>
      <TeamHolder>
        <Team
          imgs={img}
          name="Light Tonaria"
          pos="Team Lead: Counselor BHS Network Africa"
        />
        <Team imgs={img3} name="Cuby Mendie" pos="Expert on Mental Health" />
        <Team
          imgs={img4}
          name="Violet Tasheni"
          pos="Coordinator BHS Network Africa Zambia"
        />
        <Team imgs={img5} name="Lydia Idungafa" pos="Legal Adviser" />
      </TeamHolder>
      <AHeader>Our Achievements</AHeader>
      <Achievement>
        <AchHolder>
          <div>
            <AiFillStar />
          </div>
          <div>400+</div>
          <span>community</span>
        </AchHolder>
        <AchHolder>
          <div>
            <AiFillStar />
          </div>
          <div>300+</div>
          <span>Beneficiaries</span>
        </AchHolder>
        <AchHolder>
          <div>
            <AiFillStar />
          </div>
          <div>20+</div>
          <span>voluteers</span>
        </AchHolder>
        <AchHolder>
          <div>
            <AiFillStar />
          </div>
          <div>2+</div>
          <span>projects</span>
        </AchHolder>
      </Achievement>
    </Container>
  );
};

export default History;

const Achievement = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
`;
const AHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
  color: #9a0563;
  font-weight: bold;
  padding: 50px 0px;
  background-color: white;
  @media screen and(max-width:765px) {
    font-size: 30px;
  }
`;
const AchHolder = styled.div`
  /* width: 00px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px 20px;
  color: #9a0563;
  margin: 20px 0px;
  div {
    font-size: 60px;
    font-weight: bold;
  }
  span {
    font-size: 18px;
  }

  @media screen and (max-width: 765px) {
    width: 100%;
  }
`;

const TeamHeader = styled.div`
  color: #9a0563;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  padding-top: 80px;
  background-color: white;
  @media screen and (max-width: 765px) {
    font-size: 30px;
  }
`;
const TeamHolder = styled.div`
  background-color: #9a0563;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  /* min-height: 100; */
  z-index: 10000;
  background-color: #fbf7f7;
  padding-top: 85px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Text = styled.div`
  color: gray;
  letter-spacing: 2px;
  font-size: 12px;
`;
const Text2 = styled.div`
  color: #9a0563;
  font-size: 40px;
  font-weight: bold;
  margin-top: 15px;
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  @media screen and (max-width: 765px) {
    font-size: 30px;
  }
`;

const Wrap = styled.div`
  width: 85%;
  flex-direction: column;
  line-height: 1.5;
  font-family: Arial;
`;

const Story = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  width: 100%;

  /* align-items: center; */
`;
const BrandStory = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 765px) {
    width: 90%;
  }
`;
const Image = styled.img`
  width: 500px;
  object-fit: cover;
  height: 600px;
  margin-top: 30px;
  margin-left: 20px;
  @media screen and (max-width: 765px) {
    width: 90%;
  }
`;
const Topic = styled.div`
  color: #993366;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  @media screen and (max-width: 765px) {
    font-size: 30px;
  }
`;
const SText1 = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
`;
const SText2 = styled.div`
  font-size: 18px;
  line-height: 1.5;
  /* letter-spacing: 1px; */
`;

const Founder = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 100px;
  width: 100%;
`;
const FText = styled.div`
  width: 550px;
  min-height: 700px;
  height: 100%;
  background-color: white;
  z-index: 1;
  position: absolute;
  right: 600px;
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  font-size: 30px;

  @media screen and (max-width: 765px) {
    right: 30px;
    width: 80%;
    height: 100%;
    background-color: red;

    /* align-items: center; */
  }
`;
const FImage = styled.img`
  width: 900px;
  height: 900px;
  position: relative;
  @media screen and (max-width: 765px) {
    width: 70%;
    height: 700px;
  }
`;
