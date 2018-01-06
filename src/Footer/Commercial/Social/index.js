import React from "react";
import styled from "styled-components";
import fb from "./fb.svg";
import tw from "./tw.svg";
import ig from "./ig.svg";

const Social = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

const ImageFb = styled.img`
  width: 12px;
  @media (min-width: 768px) {
    width: 18px;
  }
`;

const ImageTw = styled.img`
  width: 12px;
  @media (min-width: 768px) {
    width: 18px;
  }
`;

const ImageIg = styled.img`
  width: 6.5px;
  @media (min-width: 768px) {
    width: 9.5px;
  }
`;

export default () => {
  return (
    <Social>
      <Link href="#url">
        <ImageFb src={fb} alt="Facebook" />
      </Link>
      <Link href="#url">
        <ImageTw src={tw} alt="Twitter" />
      </Link>
      <Link href="#url">
        <ImageIg src={ig} alt="Instagramm" />
      </Link>
    </Social>
  );
};
