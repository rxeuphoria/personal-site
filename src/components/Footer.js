import styled from "styled-components";

import graduationphoto from "../images/graduation-photo.jpeg";
import linkedinIcon from "../images/linkedin-3-xxl.png";
import emailIcon from "../images/grayemailicon.png";
import githubIcon from "../images/gray-github-icon.png";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  flex-shrink: 0;
`;

const FooterSection = styled.div`
  display: flex;
  align-items: center;
`;

const centerIconStyling = {
  margin: "auto",
  height: "35px",
  width: "auto",
  marginLeft: 5,
  marginRight: 5,
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>last updated Dec 2021</FooterSection>
      <FooterSection>
        <a href="https://www.linkedin.com/in/bcackerman/">
          <img src={linkedinIcon} style={centerIconStyling} alt="LinkedIn" />
        </a>
        <a href="mailto: benchackerman@gmail.com">
          <img src={emailIcon} style={centerIconStyling} alt="email" />
        </a>
        <a href="https://github.com/rxeuphoria">
          <img src={githubIcon} style={centerIconStyling} alt="GitHub" />
        </a>
      </FooterSection>
      <FooterSection>
        site created by
        <img
          src={graduationphoto}
          style={{
            width: 857 / 20,
            height: 1060 / 20,
            borderRadius: 200,
            display: "flex",
            marginLeft: "10px",
          }}
          alt="graduation"
        />
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
