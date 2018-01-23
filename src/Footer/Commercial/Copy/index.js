import React from 'react';
import styled from 'styled-components';
import Logo from './logo.svg';

const Copy = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #636363;

  display: flex;
  align-items: center;
  margin: 0 0 11px;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 19px;

    margin-bottom: 0;
  }
`;

const Image = styled.img`
  height: 19px;
  margin-right: 8px;
  @media (min-width: 768px) {
    height: 22px;
    margin-right: 12.5px;
  }
`;

const Text = styled.span``;

export default () => (
  <Copy>
    <Image src={Logo} alt="Airbnb" />
    <Text>© Airbnb Inc.</Text>
  </Copy>
);
