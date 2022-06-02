import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";
import ProfilePic from "../../assets/2940e1d2fed0cec1277ff5bd6f00ddee.webp";

const HireMe = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default HireMe;

const Container = styled.div`
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
const P1 = styled.p`
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

const Image = styled.img`
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
