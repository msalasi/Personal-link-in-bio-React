import styled from "styled-components";

export const Header = styled.header`
  margin-top: 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 11em;
  height: 11em;
  border-radius: 100%;
  border: 1px solid #fff;
  box-shadow: rgb(28 32 93 / 24%) 0px 2px 8px 0px;
`;

export const Title = styled.h1`
  display: inline-block;
  font-size: 0.8em;
  font-weight: bold;
  border-radius: 1em;
  background-color: #000a;
  color: #fff;
  padding: 0.3em 0.6em;
  border: 1px solid #fffa;
  box-shadow: rgb(28 32 93 / 24%) 0px 2px 8px 0px;
  backdrop-filter: blur(10px) saturare(160%) contrast(180%);
`;

export const ContentList = styled.ul`
  box-sizing: border-box;
  list-style: none;
  margin: 0 auto;
  padding: 2em;
  max-width: 480px;
`;

export const List = styled.li`
  background-color: #fffa;
  border-radius: 10em;
  padding: 1em;
  margin: 1.4em 0;
  box-shadow: rgb(28 32 93 / 24%) 0px 2px 8px 0px;
  backdrop-filter: blur(10px) saturare(160%) contrast(180%);
`;

export const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  color: black;
  text-decoration: none;
`;

export const VantaDiv = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;

export const Main = styled.div`
  position: relative;
  opacity: 0;
  transition: opacity 2s ease-in-out;
`;
