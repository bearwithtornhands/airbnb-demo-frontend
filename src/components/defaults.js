import styled from "styled-components";
import rightSmall from "../img/right-small.svg";
import right from "../img/right.svg";

export const H2 = styled.h2`
  font-size: 24px;
  line-height: 31px;
  font-weight: bold;

  margin: 0 0 16px;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;

    margin: 0 0 24px;
  }
`;

export const Wrapper = styled.div`
  max-width: 982px;
  margin: auto;
  padding: 0 8px;
`;

export const Section = styled.section`
  margin: 0 0 40px;
  @media (min-width: 768px) {
    margin: 0 0 48px;
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 0 16px;
  h2 {
    margin: 0 8px 0 0;
  }
  a {
    font-size: 12px;
    line-height: 24px;
    color: #383838;
    white-space: nowrap;

    padding-right: 13px;
    background: url(${rightSmall}) no-repeat right center transparent;
  }
  @media (min-width: 768px) {
    margin: 0 0 24px;
    a {
      font-size: 14px;
    }
  }
`;

export const SliderTrack = styled.div`
  position: relative;
`;

export const SliderRight = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  background: url(${right}) no-repeat right 14px center #ffffff;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 100%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  cursor: pointer;
  @media (min-width: 1200px) {
    display: block;
  }
`;

export const Review = styled.div`
  font-size: 12px;
  line-height: 15px;
  white-space: nowrap;

  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

export const MainInner = styled.main`
  margin: 0 0 40px;
  @media (min-width: 768px) {
    margin: 0 0 64px;
  }
`;
