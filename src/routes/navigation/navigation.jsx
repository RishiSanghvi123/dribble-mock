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
          <P>Inspiration</P>
          <P>Find Work</P>
          <P>Learn Design</P>
          <P>Go Pro</P>
          <P>Marketplace</P>
          <P>Hire Designers</P>
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

const Image = styled.img`
  width: 80px;
  height: 40px;
  margin-right: 5 px;
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
  padding: 7px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid #eff1f5;
  height: 49px;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const P = styled.p`
  font-size: 11px;
  font-weight: bold;
  color: #6e6d7a;
  &:hover {
    color: black;
  }
  cursor: pointer;
  padding: 6px;
`;

const FlexEnd = styled.div`
  //width: 23%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0;
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
