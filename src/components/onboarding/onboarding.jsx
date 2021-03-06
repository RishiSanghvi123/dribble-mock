import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

import ProfilePic from "../../assets/2940e1d2fed0cec1277ff5bd6f00ddee.webp";
import Work1 from "../../assets/1.webp";
import Work2 from "../../assets/2.webp";
import Work3 from "../../assets/3.webp";
import Work4 from "../../assets/4.webp";
import Work5 from "../../assets/5.webp";

import { useState } from "react";

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

  const [slideIndex, setSlideIndex] = useState(Work1);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(
        slideIndex === Work1
          ? Work5
          : slideIndex === Work2
          ? Work1
          : slideIndex === Work3
          ? Work2
          : slideIndex === Work4
          ? Work3
          : Work4
      );
    } else {
      setSlideIndex(
        slideIndex === Work1
          ? Work2
          : slideIndex === Work2
          ? Work3
          : slideIndex === Work3
          ? Work4
          : slideIndex === Work4
          ? Work5
          : Work1
      );
    }
  };
  return (
    <SC>
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
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <LeftButton className="abcd">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                role="img"
                className="icon "
              >
                <rect
                  width="13"
                  height="15"
                  transform="matrix(-1 0 0 1 19 5)"
                  fill="black"
                  fillOpacity="0.2"
                ></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM8.49975 11.9996L12.2659 15.7071C12.6614 16.0971 13.3064 16.0971 13.7024 15.7076C13.8944 15.5186 13.9999 15.2676 13.9999 15.0006C13.9999 14.7336 13.8944 14.4826 13.7024 14.2936L11.3728 12.0001L13.7024 9.70662C14.0984 9.31662 14.0984 8.68162 13.7024 8.29212C13.3064 7.90263 12.6619 7.90263 12.2659 8.29212L8.49975 11.9996Z"
                  fill="white"
                ></path>
                <circle
                  r="11.5"
                  transform="matrix(-1 0 0 1 12 12)"
                  stroke="black"
                  strokeOpacity="0.1"
                ></circle>
              </svg>
            </LeftButton>
          </Arrow>
          <Arrow direction="right" onClick={() => handleClick("right")}>
            <RightButton className="abcd">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                role="img"
                className="icon "
              >
                <rect
                  x="5"
                  y="5"
                  width="13"
                  height="15"
                  fill="black"
                  fillOpacity="0.2"
                ></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM15.5003 11.9996L11.7341 15.7071C11.3386 16.0971 10.6936 16.0971 10.2976 15.7076C10.1056 15.5186 10.0001 15.2676 10.0001 15.0006C10.0001 14.7336 10.1056 14.4826 10.2976 14.2936L12.6272 12.0001L10.2976 9.70662C9.90159 9.31662 9.90159 8.68162 10.2976 8.29212C10.6936 7.90263 11.3381 7.90263 11.7341 8.29212L15.5003 11.9996Z"
                  fill="white"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="11.5"
                  stroke="black"
                  strokeOpacity="0.1"
                ></circle>
              </svg>
            </RightButton>
          </Arrow>
          <SliderSlick>
            <Img src={slideIndex} />
            {/* <Img src={Work2} />
          <Img src={Work3} />
          <Img src={Work4} />
          <Img src={Work5} /> */}
          </SliderSlick>
        </WorkProfile>
        <Slider>
          <ImgSliderDiv>
            <ImgSlider
              src={Work1}
              className={slideIndex === Work1 ? "selected" : ""}
              onClick={() => setSlideIndex(Work1)}
            />
            <ImgSlider
              src={Work2}
              className={slideIndex === Work2 ? "selected" : ""}
              onClick={() => setSlideIndex(Work2)}
            />
            <ImgSlider
              src={Work3}
              className={slideIndex === Work3 ? "selected" : ""}
              onClick={() => setSlideIndex(Work3)}
            />
            <ImgSlider
              src={Work4}
              className={slideIndex === Work4 ? "selected" : ""}
              onClick={() => setSlideIndex(Work4)}
            />
            <ImgSlider
              src={Work5}
              className={slideIndex === Work5 ? "selected" : ""}
              onClick={() => setSlideIndex(Work5)}
            />
          </ImgSliderDiv>
        </Slider>

        <PersonalText>
          <Description>{arr}</Description>
        </PersonalText>
      </Container>
    </SC>
  );
};

export default Onboarding;

const SC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  /* margin-left: 24%;
  margin-right: 23.4%; */
  padding-top: 40px;
  width: 55%;
  position: relative;

  /* padding-left: 350px; */
`;
const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* justify-content: center; */
  align-items: center;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
`;

const TextInfo = styled.div`
  display: grid;
  //align-items: center;
  padding-left: 15px;

  justify-content: space-around;
`;
const PersonalTextInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  width: 180px;
  justify-content: space-between;
  position: relative;
  bottom: 7px;
`;
const Image = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: relative;
  bottom: 9px;
  cursor: pointer;
`;

const P1 = styled.p`
  font-weight: bolder;
  font-size: 16px;
  margin: 0;
  /* position: relative;
  top: 5px; */
`;
const P2 = styled.p`
  font-size: 15px;
  color: #3d3d4e;
  cursor: pointer;
`;
const P3 = styled.p`
  font-size: 15px;
  color: #e94c89;
  cursor: pointer;
`;

const DotSpan = styled.span`
  font-size: 13px;
  color: #6e6d7a;
`;

const SaveLike = styled.div``;
const SaveButton = styled.button`
  background-color: #f3f3f4;
  border: none;
  font-size: 15px;
  color: #2f2e41;
  margin: 5px;
  height: 40px;
  width: 63px;
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
  font-size: 15px;
  margin: 5px;
  height: 40px;
  width: 76px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;

const WorkProfile = styled.div`
  &:hover .abcd {
    transition: 0.5s ease;
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 600px;
  margin-top: 20px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 200px;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;

  z-index: 2;
`;

const LeftButton = styled.button`
  background-color: transparent;
  position: absolute;

  color: white;

  border: none;
  cursor: pointer;
  opacity: 0;
`;

const RightButton = styled.button`
  background-color: transparent;
  position: absolute;

  color: white;

  border: none;
  cursor: pointer;
  opacity: 0;
`;

const Slider = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const ImgSliderDiv = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  position: relative;
  .selected {
    border-style: solid;
    border-width: 2.2px;
    border-color: #e94c89;
  }
`;

const SliderSlick = styled.div`
  display: flex;
  //overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  //transform: translateX(${(props) => props.slideIndex * -1000}px);
`;

const ImgSlider = styled.img`
  height: 65px;
  width: 85px;
  margin: 10px;
  border-radius: 7px;
  margin-top: 80px;
  cursor: pointer;
  &:hover {
    border-style: solid;
    border-width: 4px;
    border-color: #e7e4e4;
    transition: 0.1s ease;
  }
`;

const PersonalText = styled.div`
  margin-top: 100px;
`;

const Description = styled.p`
  color: #3d3d4e;
  font-size: 20px;
  width: 75%;
`;

const A = styled.a`
  color: #e94c89;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;
