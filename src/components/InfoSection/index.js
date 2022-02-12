import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
  HeadingLink,
  ImgWrapGrid,
} from "./InfoElements";
const InfoSection = ({
  id,
  lightBg,
  lightText,
  description2,
  topLine,
  headline,
  headLink,
  description,
  multiImg,
  imgStart,
  img,
  img1,
  img2,
  img3,
  img4,
  alt,
  darkText,
}) => {
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                {headLink != null && (
                  <HeadingLink
                    lightText={lightText}
                    href="https://www.tcs.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    {headLink}
                  </HeadingLink>
                )}
                {headline != null && (
                  <Heading lightText={lightText}>{headline}</Heading>
                )}
                <br />
                <Subtitle darkText={darkText}>{description}</Subtitle>
                {description2 != null && (
                  <>
                    <br />
                    <Subtitle darkText={darkText}>
                      {description2}
                      <span style={{ color: "#01bf71" }}>
                        JavaScript, React, HTML5 and CSS.
                      </span>
                    </Subtitle>
                  </>
                )}
              </TextWrapper>
            </Column1>
            <Column2>
              {multiImg === false && (
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              )}
              {multiImg === true && (
                <ImgWrapGrid>
                  <Img src={img1} alt="JavaScript" />
                  <Img src={img2} alt="React" />
                  <Img src={img3} alt="HTML5" />
                  <Img src={img4} alt="CSS3" />
                </ImgWrapGrid>
              )}
              {multiImg === undefined && <div>Form will be here</div>}
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
