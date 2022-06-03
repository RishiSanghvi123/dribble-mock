import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";
import ProfilePic from "../../assets/2940e1d2fed0cec1277ff5bd6f00ddee.webp";

import Work11 from "../../assets/11.webp";
import Work12 from "../../assets/12.webp";
import Work13 from "../../assets/13.webp";
import Work14 from "../../assets/14.webp";
import Work15 from "../../assets/15.png";

const HireMe = () => {
  return (
    <Container>
      <UpperContainer>
        <ProfilePicture>
          <Line1 />
          <Image src={ProfilePic} />
          <Line2 />
        </ProfilePicture>
        <H2>Eren ✦</H2>
        <P1>Let's create something amazing together ✦</P1>
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
          <P2>More by Eren ✦</P2>
          <P3>View Profile</P3>
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

export default HireMe;

const Container = styled.div`
  width: 100%;
  padding-top: 20px;
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
  left: 110px;
  font-size: 23px;
  font-weight: 500;
  bottom: 5px;
`;

const P1 = styled.p`
  position: relative;
  left: 17px;
  font-size: 13px;
  bottom: 25px;
`;

const Button = styled.button`
  background-color: #e94c89;
  color: white;
  border: none;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  margin: 5px;
  height: 40px;
  width: 100px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  left: 90px;
  bottom: 25px;
`;

const Image = styled.img`
  border-radius: 50%;
  height: 69px;
  width: 69px;
  position: relative;
  bottom: 9px;
  cursor: pointer;
  left: 110px;
`;

const Line1 = styled.div`
  width: 37%;
  height: 47px;
  border-bottom-style: solid;
  border-bottom-width: 2.2px;
  border-bottom-color: #e7e7e9;
  position: absolute;
  left: 9.5%;
  top: 35px;
`;

const Line2 = styled.div`
  width: 37%;
  height: 47px;
  border-bottom-style: solid;
  border-bottom-width: 2.2px;
  border-bottom-color: #e7e7e9;
  position: absolute;
  right: 7.8%;
  top: 35px;
`;

const ProfilePicture = styled.div`
  display: flex;
  /* position: relative; */
`;

const AdditionalInfo = styled.div`
  display: grid;
  /* margin-right: 120px;
  margin-left: 120px; */
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;
const TextDiv = styled.div`
  width: 90%;
  margin-left: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100px; */
`;
const P2 = styled.p`
  font-size: 16px;
  font-weight: bolder;
`;
const P3 = styled.p`
  cursor: pointer;
  font-size: 14px;
  color: #e94c89;
  margin-right: 10%;
  &:hover {
    opacity: 0.7;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  width: 90%;
  margin-left: 10%;
`;

const Image2 = styled.img`
  height: 100%;
  width: 21%;
  margin-right: 35px;
  border-radius: 4%;
  cursor: pointer;
`;

const Image3 = styled.img`
  height: 50%;
  width: 8%;
  margin-top: 40px;
  position: relative;
  left: 47%;
`;
