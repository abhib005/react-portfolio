import devSvg from "../../images/web_developer_green.svg";
import jsSvg from "../../images/javascript.svg";
import reSvg from "../../images/react.svg";
import htmlSvg from "../../images/html5.svg";
import cssSvg from "../../images/css3.svg";

export const homeObjeOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About Me",
  description: `I am a technology inspired individual with a knack of trying new things.

  An experienced Web Developer with 3+ years of full time experience in developing solutions and products for one of the most valued IT services company.

  Currently learning about web3.
  `,
  buttonLabel: "Get started",
  multiImg: false,
  imgStart: false,
  img: devSvg,
  alt: "Web Developer",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjeTwo = {
  id: "experience",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Experience",
  headLink: `Tata Consultancy Services`,
  headline: `Systems Engineer - 2018 - Present`,
  description: `I have been working in a BFSI project for the past 3 years developing web pages and solutions in an Agile Environment.
  
  I have worked on technologies such as, Microsoft .Net (C# MVC), HTML, ReactJS, CSS, Bootstrap, JavaScript, jQuery, Handlebars, NodeJS, REST API.`,
  description2: `I am more proficient in working with/on `,
  buttonLabel: "Get started",
  multiImg: true,
  imgStart: true,
  img1: jsSvg,
  img2: reSvg,
  img3: htmlSvg,
  img4: cssSvg,
  dark: true,
  primary: true,
  darkText: true,
};
