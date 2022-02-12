import React from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroDownIcon,
  HeroName,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Hi! This is a digital resume of
          <br />
          <HeroName>Abhishek Bhatia</HeroName>
        </HeroH1>
        <HeroP>
          Scroll down to know more about me.
        </HeroP>
        <HeroDownIcon  size={30} />
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
