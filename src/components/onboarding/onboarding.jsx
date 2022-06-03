import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

import Work11 from "../../assets/11.webp";
import Work12 from "../../assets/12.webp";
import Work13 from "../../assets/13.webp";
import Work14 from "../../assets/14.webp";
import Work15 from "../../assets/15.png";

import ProfilePic from "../../assets/2940e1d2fed0cec1277ff5bd6f00ddee.webp";
import Work1 from "../../assets/1.webp";
import Work2 from "../../assets/2.webp";
import Work3 from "../../assets/3.webp";
import Work4 from "../../assets/4.webp";
import Work5 from "../../assets/5.webp";

const Onboarding = () => {
  const arr = [
    "Yo, what's up guys! 🥳",
    <br />,
    <br />,
    "It's tiring to write a different description for each shot, just like the shot and move on, love ya! 😘",
    <br />,
    <br />,
    "Let's create something amazing together! 🧑‍🎨",
    <br />,
    "Feel free to contact me - ",
    <A href="ertuken@gmail.com">ertuken@gmail.com</A>,
  ];
  return (
    <Container>
      <Profile>
        <Info>
          <Image src={ProfilePic} />
          <TextInfo>
            <P1>Onboarding #Exploration</P1>
            <PersonalTextInfo>
              <P2>Eren ✦</P2>
              <DotSpan>•</DotSpan>
              <P2>Follow</P2>
              <DotSpan>•</DotSpan>
              <P3>Hire Me</P3>
            </PersonalTextInfo>
          </TextInfo>
        </Info>
        <SaveLike>
          <SaveButton>Save</SaveButton>
          <LikeButton>
            {/* <Image2
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
            >
              <path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path>
            </Image2> */}
            <AiFillHeart
              style={{
                position: "relative",
                top: "1.5px",
                right: "1px",
              }}
              color="white"
            />{" "}
            Like
          </LikeButton>
        </SaveLike>
      </Profile>
      <WorkProfile>
        {/* <LeftButton></LeftButton> */}
        <LeftButton className="abcd">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            role="img"
            class="icon "
          >
            <rect
              width="13"
              height="15"
              transform="matrix(-1 0 0 1 19 5)"
              fill="black"
              fill-opacity="0.2"
            ></rect>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM8.49975 11.9996L12.2659 15.7071C12.6614 16.0971 13.3064 16.0971 13.7024 15.7076C13.8944 15.5186 13.9999 15.2676 13.9999 15.0006C13.9999 14.7336 13.8944 14.4826 13.7024 14.2936L11.3728 12.0001L13.7024 9.70662C14.0984 9.31662 14.0984 8.68162 13.7024 8.29212C13.3064 7.90263 12.6619 7.90263 12.2659 8.29212L8.49975 11.9996Z"
              fill="white"
            ></path>
            <circle
              r="11.5"
              transform="matrix(-1 0 0 1 12 12)"
              stroke="black"
              stroke-opacity="0.1"
            ></circle>
          </svg>
        </LeftButton>
        <RightButton className="abcd">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            role="img"
            class="icon "
          >
            <rect
              x="5"
              y="5"
              width="13"
              height="15"
              fill="black"
              fill-opacity="0.2"
            ></rect>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM15.5003 11.9996L11.7341 15.7071C11.3386 16.0971 10.6936 16.0971 10.2976 15.7076C10.1056 15.5186 10.0001 15.2676 10.0001 15.0006C10.0001 14.7336 10.1056 14.4826 10.2976 14.2936L12.6272 12.0001L10.2976 9.70662C9.90159 9.31662 9.90159 8.68162 10.2976 8.29212C10.6936 7.90263 11.3381 7.90263 11.7341 8.29212L15.5003 11.9996Z"
              fill="white"
            ></path>
            <circle
              cx="12"
              cy="12"
              r="11.5"
              stroke="black"
              stroke-opacity="0.1"
            ></circle>
          </svg>
        </RightButton>
        <Img src={Work1} />
        <Img src={Work2} />
        <Img src={Work3} />
        <Img src={Work4} />
        <Img src={Work5} />
      </WorkProfile>
      <Slider>
        <ImgSlider src={Work1} className="selected" />
        <ImgSlider src={Work2} />
        <ImgSlider src={Work3} />
        <ImgSlider src={Work4} />
        <ImgSlider src={Work5} />
      </Slider>
      <PersonalText>
        <Description>{arr}</Description>
      </PersonalText>
      <UpperContainer>
        <ProfilePicture>
          <Line1 />
          <Image4 src={ProfilePic} />
          <Line2 />
        </ProfilePicture>
        <H2>Eren ✦</H2>
        <P6>Let's create something amazing together ✦</P6>
        <Button>
          <FaEnvelope
            style={{
              position: "relative",
              top: "1.5px",
              right: "4px",
            }}
          />
          Hire Me
        </Button>
      </UpperContainer>
      <AdditionalInfo>
        <TextDiv>
          <P4>More by Eren ✦</P4>
          <P5>View Profile</P5>
        </TextDiv>
        <ImageDiv>
          <Image2 src={Work11} />
          <Image2 src={Work12} />
          <Image2 src={Work13} />
          <Image2 src={Work14} />
        </ImageDiv>
        <Image3 src={Work15} />
      </AdditionalInfo>
    </Container>
  );
};

export default Onboarding;

const Container = styled.div`
  /* margin-left: 24%;
  margin-right: 23.4%; */
  padding-top: 25px;
  align-items: center;
  justify-content: center;
  align-items: center;
`;
const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 81%;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
`;

const TextInfo = styled.div`
  display: grid;
  //align-items: center;
  padding-left: 15px;
  margin: 0;
  justify-content: space-around;
`;
const PersonalTextInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  width: 147px;
  justify-content: space-between;
  position: relative;
  bottom: 7px;
`;
const Image = styled.img`
  border-radius: 50%;
  height: 39px;
  width: 39px;
  position: relative;
  bottom: 9px;
  cursor: pointer;
`;

const P1 = styled.p`
  font-weight: bolder;
  font-size: 13px;
  margin: 0;
  /* position: relative;
  top: 5px; */
`;
const P2 = styled.p`
  font-size: 12px;
  color: #3d3d4e;
  cursor: pointer;
`;
const P3 = styled.p`
  font-size: 12px;
  color: #e94c89;
  cursor: pointer;
`;

const DotSpan = styled.span`
  font-size: 10px;
  color: #6e6d7a;
`;

const SaveLike = styled.div``;
const SaveButton = styled.button`
  background-color: #f3f3f4;
  border: none;
  font-size: 12px;
  color: #2f2e41;
  margin: 5px;
  height: 32px;
  width: 50px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #e7e7e9;
  }
`;
const LikeButton = styled.button`
  background-color: #e94c89;
  color: white;
  border: none;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  margin: 5px;
  height: 32px;
  width: 63px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;

const WorkProfile = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 81%;
  height: 100%;
  &:hover .abcd {
    transition: 0.5s ease;
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 480px;
  margin-top: 20px;
`;

const LeftButton = styled.button`
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 0%;
  color: white;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  opacity: 0;
`;

const RightButton = styled.button`
  background-color: transparent;
  position: absolute;
  top: 50%;
  right: 0%;
  color: white;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  opacity: 0;
`;

const Slider = styled.div`
  width: 504px;
  height: 68px;
  display: flex;
  align-items: center;
  position: relative;
  left: 114px;
  .selected {
    border-style: solid;
    border-width: 1.8px;
    border-color: #e94c89;
    z-index: 1;
  }
`;

const ImgSlider = styled.img`
  height: 45px;
  width: 65px;
  margin: 10px;
  border-radius: 7px;
  margin-top: 40px;
  cursor: pointer;
  &:hover {
    border-style: solid;
    border-width: 3px;
    border-color: #e7e4e4;
    transition: 0.1s ease;
    z-index: 0;
  }
`;

const PersonalText = styled.div`
  margin-top: 50px;
`;

const Description = styled.p`
  color: #3d3d4e;
`;

const A = styled.a`
  color: #e94c89;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;

const UpperContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  padding-top: 60px;
  position: relative;
`;
const H2 = styled.h2`
  position: relative;
  left: 85px;
  font-size: 20px;
  font-weight: 500;
  bottom: 5px;
`;
const P6 = styled.p`
  position: relative;
  left: 12px;
  font-size: 10px;
  bottom: 25px;
`;

const Button = styled.button`
  background-color: #e94c89;
  color: white;
  border: none;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  margin: 5px;
  height: 32px;
  width: 83px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  left: 70px;
  bottom: 25px;
`;

const Image4 = styled.img`
  border-radius: 50%;
  height: 59px;
  width: 59px;
  position: relative;
  bottom: 9px;
  cursor: pointer;
  left: 85px;
`;

const Line1 = styled.div`
  width: 37%;
  height: 47px;
  border-bottom-style: solid;
  border-bottom-width: 1.8px;
  border-bottom-color: #e7e7e9;
  position: absolute;
  left: 9.5%;
  top: 35px;
`;

const Line2 = styled.div`
  width: 37%;
  height: 47px;
  border-bottom-style: solid;
  border-bottom-width: 1.8px;
  border-bottom-color: #e7e7e9;
  position: absolute;
  right: 8%;
  top: 35px;
`;

const ProfilePicture = styled.div`
  display: flex;
  /* position: relative; */
`;

const AdditionalInfo = styled.div`
  display: grid;
  margin-right: 110px;
  margin-left: 110px;
  margin-top: 30px;
`;
const TextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const P4 = styled.p`
  font-size: 13px;
  font-weight: bolder;
`;
const P5 = styled.p`
  cursor: pointer;
  font-size: 11px;
  color: #e94c89;
  &:hover {
    opacity: 0.7;
  }
`;

const ImageDiv = styled.div`
  display: flex;
`;

const Image2 = styled.img`
  height: 100%;
  width: 22%;
  margin-right: 35px;
  border-radius: 4%;
  cursor: pointer;
`;

const Image3 = styled.img`
  height: 50%;
  width: 10%;
  margin-top: 40px;
  position: relative;
  left: 407px;
`;
