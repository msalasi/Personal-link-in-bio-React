import React from "react";
import PersonalImg from "../assets/img/main-image.jpg";
import Inst from "../assets/logos/instagram.png";
import Twitter from "../assets/logos/gorjeo.png";
import Github from "../assets/logos/github.png";
import House from "../assets/logos/house.png";
import Linkedin from "../assets/logos/linkedin.png";
import { Header, Img, Title, ContentList, List, Link } from "../Styles/App";

function MainRender() {
  return (
    <>
      <Header className="header-top-section">
        <Img src={PersonalImg} alt="Personal imagen" />
        <Title className="main-title">@Misaindev</Title>
      </Header>
      <ContentList className="ul-principal-section">
        <List className="li-principal-section">
          <Link href="https://msalas-i.netlify.app/">
            <img src={House} alt="" />
            Personal Portfolio
          </Link>
        </List>
        <List className="li-principal-section">
          <Link href="https://www.instagram.com/msalasi.dev/">
            <img src={Inst} alt="" />
            Instagram
          </Link>
        </List>
        <List className="li-principal-section">
          <Link href="https://twitter.com/MichaelSi_27">
            <img src={Twitter} alt="" />
            Twitter
          </Link>
        </List>
        <List className="li-principal-section">
          <Link href="https://www.linkedin.com/in/misaindev/">
            <img src={Linkedin} alt="" />
            Linkedin
          </Link>
        </List>
        <List className="li-principal-section">
          <Link href="https://github.com/msalasi">
            <img src={Github} alt="" />
            Github
          </Link>
        </List>
      </ContentList>
    </>
  );
}

export default MainRender;
