import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const NavColumn = styled.div``;

const Title = styled.h6`
  font-size: 12px;
  line-height: 16px;
  color: #383838;
  font-weight: bold;

  margin: 0 0 19px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;

    margin-bottom: 16px;
  }
`;

const Link = styled.a`
  font-size: 12px;
  line-height: 16px;
  color: #636363;

  display: block;
  margin-bottom: 11px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;

    margin-bottom: 8px;
  }
`;

export default () => (
  <Nav>
    <NavColumn>
      <Title>Airbnb</Title>
      <Link href="#url">About us</Link>
      <Link href="#url">Careers</Link>
      <Link href="#url">Press</Link>
      <Link href="#url">Policies</Link>
      <Link href="#url">Help</Link>
      <Link href="#url">Diversity & Belongin</Link>
    </NavColumn>
    <NavColumn>
      <Title>Discover</Title>
      <Link href="#url">Trust & Safety</Link>
      <Link href="#url">Travel Credit</Link>
      <Link href="#url">Gift Cards</Link>
      <Link href="#url">Airbnb Citizen</Link>
      <Link href="#url">Business Travel</Link>
      <Link href="#url">Guidebooks</Link>
      <Link href="#url">Airbnbmag</Link>
    </NavColumn>
    <NavColumn>
      <Title>Airbnb</Title>
      <Link href="#url">Hosting</Link>
      <Link href="#url">Why Host</Link>
      <Link href="#url">Hospitality</Link>
      <Link href="#url">Responsible Hosting</Link>
      <Link href="#url">Help</Link>
      <Link href="#url">Community Center</Link>
    </NavColumn>
  </Nav>
);
