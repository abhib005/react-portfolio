import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";
export const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Abhishek Bhatia</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="experience">Experience</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="recognitions">Recognitions</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact Me</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/download">Download Resume</NavBtnLink> 
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
