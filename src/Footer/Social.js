import React, { Component } from "react";
import styled from "styled-components";
import fb from "./src/fb.svg";
import tw from "./src/tw.svg";
import ig from "./src/ig.svg";

const SocialList = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  display: block;
  width: 16px;
  height: 16px;
  margin: 0 8px 0 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
  &:last-child {
    margin: 0;
  }
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin: 0 12px 0 0;
  }
`;

const LinkFb = Link.extend`
  background-image: url(${fb});
  background-size: 12px auto;
  @media (min-width: 768px) {
    background-size: 18px auto;
  }
`;

const LinkTw = Link.extend`
  background-image: url(${tw});
  background-size: 12px auto;
  @media (min-width: 768px) {
    background-size: 18px auto;
  }
`;

const LinkIg = Link.extend`
  background-image: url(${ig});
  background-size: 6.5px auto;
  @media (min-width: 768px) {
    background-size: 9.5px auto;
  }
`;

class Social extends Component {
  render() {
    return (
      <SocialList>
        <LinkFb href="#url" />
        <LinkTw href="#url" />
        <LinkIg href="#url" />
      </SocialList>
    );
  }
}

export default Social;
