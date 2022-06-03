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
          <UL class="site-nav-desktop-nav">
            <L1>
              <P>Inspiration</P>
              <div></div>
            </L1>
            <L2>
              <P>Find Work</P>
              <div></div>
            </L2>
            <L3>
              <Span>Learn Design</Span>
              <div></div>
            </L3>
            <L4>
              <P>Go Pro</P>
              <div></div>
            </L4>
            <L5>
              <P>Marketplace</P>
              <div></div>
            </L5>
            <L6>
              <Span>Hire Designers</Span>
              <div></div>
            </L6>
          </UL>
        </NavLinks>
        <FlexEnd>
          <IoSearch color="#9E9EA7" size={17} />
          <SignIn>Sign in</SignIn>
          <Button>Share my work</Button>
        </FlexEnd>
      </Container>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

const UL = styled.ul`
  display: flex;
  list-style-type: none;
  width: 644.56px;
  position: relative;
  right: 20px;
  top: 2px;
`;

const L1 = styled.li`
  width: 102px;
`;
const L2 = styled.li`
  width: 99.55px;
`;
const L3 = styled.li`
  width: 120px;
`;
const L4 = styled.li`
  width: 78px;
`;
const L5 = styled.li`
  width: 115px;
`;
const L6 = styled.li`
  width: 130px;
`;

const Image = styled.img`
  width: 100px;
  height: 40px;
  opacity: 1;
  display: block;
  height: auto;
  transition: 0.1s ease;
  backface-visibility: hidden;
  &:hover {
    opacity: 0.6;
  }
  cursor: pointer;
`;

const Container = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid #eff1f5;
  height: 80px;
  width: 1440px;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 736.56px;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #6e6d7a;
  &:hover {
    color: black;
  }
  cursor: pointer;
  /* padding: 6px; */
  height: 20px;
  width: 70px;
`;

const Span = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #6e6d7a;
  &:hover {
    color: black;
  }
  cursor: pointer;
  /* padding: 4px; */
  position: relative;
  top: 12px;
`;

const FlexEnd = styled.div`
  //width: 23%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  width: 240px;
  /* margin-top: 10px; */
`;

const SignIn = styled.p`
  font-size: 13px;
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
  font-size: 12px;
  height: 32px;
  width: 110px;
`;
