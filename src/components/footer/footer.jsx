import styled from "styled-components";
import Logo from "../../assets/pink.png";
import SocialMedia from "../../assets/social.png";
import FooterImage from "../../assets/footer.png";

const Footer = () => {
  return (
    <SC>
      <Container>
        <LeftContainer>
          <Social>
            <Image src={Logo} />
            <Span>
              Dribbble is the world’s leading community for creatives to share,
              grow, and get hired.
            </Span>
            <Image2 src={SocialMedia} />
          </Social>
        </LeftContainer>
        <RightContainer>
          <AdditionalInfo>
            <UL>
              <LI>
                <P1>For designers</P1>
                <P2>Go Pro!</P2>
                <P2>Explore design work</P2>
                <P2>Design blog</P2>
                <P2>Overtime podcast</P2>
                <P2>Dribble meetups</P2>
                <P2>Playoffs</P2>
                <P2>Weekly Warm-Up</P2>
                <P2>Code of conduct</P2>
              </LI>
              <LI>
                <P1>Hire designers</P1>
                <P2>Post a job opening</P2>
                <P2>Post a freelance project</P2>
                <P2>Search for designers</P2>
                <P1>Brands</P1>
                <P2>Advertise with us</P2>
              </LI>
              <LI>
                <P1>Company</P1>
                <P2>About</P2>
                <P2>Careers</P2>
                <P2>Support</P2>
                <P2>Media kit</P2>
                <P2>Testimonials</P2>
                <P2>API</P2>
                <P2>Terms of service</P2>
                <P2>Privacy policy</P2>
              </LI>
              <LI>
                <P1>Directories</P1>
                <P2>Design jobs</P2>
                <P2>Designers for hire</P2>
                <P2>Freelance designers for hire</P2>
                <P2>Tags</P2>
                <P2>Places</P2>
                <P1>Design assets</P1>
                <P2>Creative Market</P2>
                <P2>Fontspring</P2>
                <P2>Font Squirrel</P2>
              </LI>
              <LI>
                <P1>Design Resource</P1>
                <P2>Freelancing</P2>
                <P2>Desing Hiring</P2>
                <P2>Desing Portfolio</P2>
                <P2>Design Education</P2>
                <P2>Creative Process</P2>
                <P2>Design Industry Trends</P2>
              </LI>
            </UL>
          </AdditionalInfo>
        </RightContainer>
      </Container>
      <FImage src={FooterImage} />
    </SC>
  );
};

export default Footer;

const SC = styled.div`
  padding-top: 50px;
`;

const FImage = styled.img`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  background-color: #fafafb;
  padding-bottom: 150px;
`;
const LeftContainer = styled.div`
  width: 25%;
  padding-top: 30px;
`;
const RightContainer = styled.div`
  width: 75%;
  padding-top: 35px;
`;

const Social = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 35%;
  padding-left: 52px;
  margin-bottom: 20px;
`;

const Image2 = styled.img`
  width: 50%;
  padding-left: 55px;
  cursor: pointer;
`;

const Span = styled.span`
  width: 70%;
  padding-left: 60px;
  margin-bottom: 20px;
  font-size: 13px;
`;

const AdditionalInfo = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding-right: 120px;
  padding-left: 0px;
`;

const UL = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin: -40px;
`;

const LI = styled.li`
  margin: 20px;
`;

const P1 = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

const P2 = styled.p`
  font-size: 15px;
  cursor: pointer;
  z-index: 100;
  font-weight: 300;
`;
