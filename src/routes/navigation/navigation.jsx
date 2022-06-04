import { Fragment, React } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

import Logo from "../../assets/Screenshot 2022-05-31 at 4.26.18 PM.png";

const Navigation = () => {
  return (
    <Fragment>
      <Container>
        <NavLinks>
          <Image src={Logo} alt={Logo} />
          <UL className="site-nav-desktop-nav">
            <L1 key="inspirtaion">
              <P1>
                <InnerP1>Inspiration</InnerP1>
              </P1>
              <HiddenDiv>
                <ItemDiv>
                  <HDP1>Explore Design work</HDP1>
                  <HDP2>Trending designs to inspire you</HDP2>
                </ItemDiv>
                <ItemDiv>
                  <HDP1>New & NoteWorthy</HDP1>
                  <HDP2>Trending designs to inspire you</HDP2>
                </ItemDiv>
                <ItemDiv>
                  <HDP1>Playoffs</HDP1>
                  <HDP2>Work designers are riffing on</HDP2>
                </ItemDiv>
                <ItemDiv>
                  <HDP1>Blog</HDP1>
                  <HDP2>Interviews, tutorials, and more</HDP2>
                </ItemDiv>
                <ItemDiv>
                  <HDP1>Weekly Warm-up</HDP1>
                  <HDP2>prompt to flex your design skills</HDP2>
                </ItemDiv>
              </HiddenDiv>
            </L1>
            <L2 key="work">
              <P2>
                <InnerP2>Find Work</InnerP2>
              </P2>
              <HiddenDiv2>
                <ItemDiv2>
                  <HDP1>Job Board</HDP1>
                  <HDP2>Find your dream design job</HDP2>
                </ItemDiv2>
                <ItemDiv2>
                  <HDP1>Freelance Projects</HDP1>
                  <HDP2>An exclusive list for contract work</HDP2>
                </ItemDiv2>
                <ItemDiv2>
                  <HDP1>Want freelance design projects?</HDP1>
                  <HDP2>Get new leads in your inbox every day</HDP2>
                </ItemDiv2>
                <ItemDiv2>
                  <HDP1>Personalize your profile with video</HDP1>
                  <HDP2>Introduce yourself to new clients with Pitch</HDP2>
                </ItemDiv2>
              </HiddenDiv2>
            </L2>
            <L3 key="learn design">
              <P3>
                <InnerP3>Learn Design</InnerP3>
              </P3>
              <HiddenDiv3>
                <ItemDiv3>
                  <HDP1>Certified Product Design Course</HDP1>
                  <HDP2>Learn product design in just 12 weeks...</HDP2>
                </ItemDiv3>
                <ItemDiv3>
                  <HDP1>Browse our courses & workshops</HDP1>
                  <HDP2>
                    Level up your skills with our interactive courses and
                    workshops...
                  </HDP2>
                </ItemDiv3>
              </HiddenDiv3>
            </L3>
            <L4 key="go pro">
              <P4>
                <InnerP4>Go Pro</InnerP4>
              </P4>
              <HiddenDiv4>
                <ItemDiv4>
                  <HDP1>For Designers</HDP1>
                  <HDP2>Portfolio creation made east</HDP2>
                </ItemDiv4>
                <ItemDiv4>
                  <HDP1>For Freelancers</HDP1>
                  <HDP2>Fresh leads in your inbox every day</HDP2>
                </ItemDiv4>
                <ItemDiv4>
                  <HDP1>For Teams</HDP1>
                  <HDP2>Build your team's pipeline or profile</HDP2>
                </ItemDiv4>
              </HiddenDiv4>
            </L4>
            <L5 key="marketplace">
              <P5>
                <InnerP5>Marketplace</InnerP5>
              </P5>
              <HiddenDiv5>
                <ItemDiv5>
                  <HDP1>Discover</HDP1>
                  <HDP2>A marketplace of digital assets...</HDP2>
                </ItemDiv5>
                <ItemDiv5>
                  <HDP1>Graphics</HDP1>
                  <HDP2>Icons, Illustrations, Patterns, Textures...</HDP2>
                </ItemDiv5>
                <ItemDiv5>
                  <HDP1>Fonts</HDP1>
                  <HDP2>Display, Script, Sans Serif, Serif...</HDP2>
                </ItemDiv5>
                <ItemDiv5>
                  <HDP1>Templates</HDP1>
                  <HDP2>Mock Ups, Social Media, Presentations...</HDP2>
                </ItemDiv5>
                <ItemDiv5>
                  <HDP1>3D</HDP1>
                  <HDP2>Characters, Objects, Textures...</HDP2>
                </ItemDiv5>
                <ItemDiv5>
                  <HDP1>Themes</HDP1>
                  <HDP2>WordPress, Shopify, Bootstrap, HTML5...</HDP2>
                </ItemDiv5>
                <ItemDiv5>
                  <HDP1>Add Ons</HDP1>
                  <HDP2>Procreate, Affinity, Photoshop, InDesign...</HDP2>
                </ItemDiv5>
                <ItemDiv5>
                  <HDP1>Open a Shop</HDP1>
                  <HDP2>Earn monet doing what you love</HDP2>
                </ItemDiv5>
              </HiddenDiv5>
            </L5>
            <L6 key="hire designers">
              <P6>
                <InnerP6>Hire Designers</InnerP6>
              </P6>
              <HiddenDiv6>
                <ItemDiv6>
                  <HDP1>Designer Search</HDP1>
                  <HDP2>Find, contact, and hire designers</HDP2>
                </ItemDiv6>
                <ItemDiv6>
                  <HDP1>List my Job opening</HDP1>
                  <HDP2>The #1 job boaed for creatives</HDP2>
                </ItemDiv6>
                <ItemDiv6>
                  <HDP1>Post a Freelance Project</HDP1>
                  <HDP2>Board for freelance & contract work</HDP2>
                </ItemDiv6>
              </HiddenDiv6>
            </L6>
          </UL>
        </NavLinks>
        <FlexEnd>
          <IoSearch color="#9E9EA7" size={22} />
          <SignIn>Sign in</SignIn>
          <Button>Share my work</Button>
        </FlexEnd>
      </Container>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

const HiddenDiv = styled.div`
  position: absolute;
  height: 280px;
  border-radius: 10px;
  width: 180px;
  background-color: #fefcfc;
  top: 60px;
  z-index: 100;
  left: 10px;
  display: none;

  /* display: none;
  transition: all 0.2s ease-in-out; */
`;

const HiddenDiv2 = styled.div`
  position: absolute;
  height: 224px;
  border-radius: 10px;
  width: 240px;
  background-color: #fefcfc;
  top: 60px;
  z-index: 100;
  left: 110px;
  display: none;

  /* display: none;
  transition: all 0.2s ease-in-out; */
`;

const HiddenDiv3 = styled.div`
  position: absolute;
  height: 122px;
  border-radius: 10px;
  width: 270px;
  background-color: #fefcfc;
  top: 60px;
  z-index: 100;
  left: 210px;
  display: none;

  /* display: none;
  transition: all 0.2s ease-in-out; */
`;

const HiddenDiv4 = styled.div`
  position: absolute;
  height: 168px;
  border-radius: 10px;
  width: 195px;
  background-color: #fefcfc;
  top: 60px;
  z-index: 100;
  left: 310px;
  display: none;

  /* display: none;
  transition: all 0.2s ease-in-out; */
`;

const HiddenDiv5 = styled.div`
  position: absolute;
  height: 448px;
  border-radius: 10px;
  width: 230px;
  background-color: #fefcfc;
  top: 60px;
  z-index: 100;
  left: 410px;
  display: none;

  /* display: none;
  transition: all 0.2s ease-in-out; */
`;

const HiddenDiv6 = styled.div`
  position: absolute;
  height: 168px;
  border-radius: 10px;
  width: 200px;
  background-color: #fefcfc;
  top: 60px;
  z-index: 100;
  left: 510px;
  display: none;

  /* display: none;
  transition: all 0.2s ease-in-out; */
`;

const UL = styled.ul`
  display: flex;
  list-style-type: none;
  width: 644.56px;
  height: 100%;
  position: relative;
  right: 20px;
  top: 2px;
  align-items: center;
  justify-content: center;
`;

const InnerP1 = styled.p``;

const P1 = styled.div`
  font-size: 14px;
  font-weight: 700;
  position: relative;
  color: #6e6d7a;
  cursor: pointer;
  height: 40px;
  bottom: 6px;
  width: 70px;
  /* justify-content: center;
  align-items: center; */
`;

const InnerP2 = styled.p``;

const P2 = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #6e6d7a;
  cursor: pointer;
  /* padding: 6px; */
  height: 37px;
  width: 70px;
`;

const InnerP3 = styled.p``;

const P3 = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #6e6d7a;
  cursor: pointer;
  /* padding: 4px; */
  position: relative;
  //top: 12px;
  height: 39px;
  width: 90px;
`;

const InnerP4 = styled.p``;

const P4 = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #6e6d7a;
  &:hover {
    color: black;
  }
  cursor: pointer;
  /* padding: 6px; */
  height: 38px;
  width: 60px;
`;

const InnerP5 = styled.p``;

const P5 = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #6e6d7a;
  &:hover {
    color: black;
  }
  cursor: pointer;
  /* padding: 6px; */
  height: 42px;
  width: 70px;
`;

const InnerP6 = styled.p``;

const P6 = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #6e6d7a;
  &:hover {
    color: black;
  }
  cursor: pointer;
  /* padding: 4px; */
  position: relative;
  //top: 12px;
  height: 42px;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 736.56px;
`;

const ItemDiv = styled.div`
  display: grid;
  padding-top: 15px;
  height: 40px;
  border-bottom: 1px solid pink;
  width: 170px;
  padding-left: 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #eceaea;
  }
`;

// const FinalItemDiv = styled.div`
//   display: grid;
//   padding-top: 15px;
//   height: 40px;
//   width: 170px;
//   padding-left: 10px;
//   border-radius: 10px;
//   border-bottom: 1px solid pink;
//   &:hover {
//     background-color: #eceaea;
//   }
// `;

const ItemDiv2 = styled.div`
  display: grid;
  padding-top: 15px;
  height: 40px;
  border-bottom: 1px solid pink;
  width: 230px;
  padding-left: 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #eceaea;
  }
`;

const ItemDiv3 = styled.div`
  display: grid;
  padding-top: 15px;
  height: 45px;
  border-bottom: 1px solid pink;
  width: 260px;
  padding-left: 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #eceaea;
  }
`;

const ItemDiv4 = styled.div`
  display: grid;
  padding-top: 15px;
  height: 40px;
  border-bottom: 1px solid pink;
  width: 185px;
  padding-left: 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #eceaea;
  }
`;

const ItemDiv5 = styled.div`
  display: grid;
  padding-top: 15px;
  height: 40px;
  border-bottom: 1px solid pink;
  width: 220px;
  padding-left: 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #eceaea;
  }
`;

const ItemDiv6 = styled.div`
  display: grid;
  padding-top: 15px;
  height: 40px;
  border-bottom: 1px solid pink;
  width: 190px;
  padding-left: 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #eceaea;
  }
`;

// const FinalItemDiv2 = styled.div`
//   display: grid;
//   padding-top: 15px;
//   height: 40px;
//   width: 220px;
//   padding-left: 10px;
//   border-radius: 10px;
//   &:hover {
//     background-color: #eceaea;
//   }
// `;

const HDP1 = styled.a`
  font-size: 13px;
  font-weight: 600;
  margin: 0;
`;

const HDP2 = styled.a`
  font-size: 10px;
  margin-top: 2px;
`;

const L1 = styled.li`
  width: 102px;
  height: 40px;
  &:hover ${HiddenDiv} {
    display: block;
  }
  &:hover ${InnerP1} {
    color: black;
  }
`;
const L2 = styled.li`
  width: 99.55px;
  &:hover ${HiddenDiv2} {
    display: block;
  }
  &:hover ${InnerP2} {
    color: black;
  }
`;
const L3 = styled.li`
  width: 120px;
  &:hover ${HiddenDiv3} {
    display: block;
  }
  &:hover ${InnerP3} {
    color: black;
  }
`;
const L4 = styled.li`
  width: 78px;
  &:hover ${HiddenDiv4} {
    display: block;
  }
  &:hover ${InnerP4} {
    color: black;
  }
`;
const L5 = styled.li`
  width: 115px;
  &:hover ${HiddenDiv5} {
    display: block;
  }
  &:hover ${InnerP5} {
    color: black;
  }
`;
const L6 = styled.li`
  width: 130px;
  &:hover ${HiddenDiv6} {
    display: block;
  }
  &:hover ${InnerP6} {
    color: black;
  }
`;

const Image = styled.img`
  width: 110px;
  height: 50px;
  opacity: 1;
  display: block;
  transition: 0.1s ease;
  &:hover {
    opacity: 0.6;
  }
  cursor: pointer;
`;

const Container = styled.div`
  padding-left: 1%;
  /*padding-right: 12px; */
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid #eff1f5;
  height: 80px;
  width: 99%;
`;

const FlexEnd = styled.div`
  //width: 23%;
  height: 100%;
  display: flex;
  align-items: center;
  width: 250px;
  /* margin-top: 10px; */
`;

const SignIn = styled.p`
  font-size: 16px;
  color: #6e6d7a;
  cursor: pointer;
  margin: 15px;
`;

const Button = styled.button`
  background-color: #e94c89;
  border: none;
  border-radius: 6.5px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  height: 40px;
  width: 134px;
`;
