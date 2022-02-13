import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import Resume from "../../../src/Resume.pdf";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="experience" onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact Me
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href={Resume} download="Resume-Abhishek-Bhatia">
            Download Resume
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
