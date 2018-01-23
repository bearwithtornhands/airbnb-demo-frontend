import React from 'react';
import styled from 'styled-components';
import GoogleMap from 'google-map-react';
import pin from './pin.svg';

const Location = styled.div``;

const Aside = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    width: calc( (100vw - 966px)/2 + (330px - 16px));
    position: fixed;
    top: 136px;
    right: 0;
    bottom: 0;
  }
`;

const Button = styled.button`
  position: fixed;
  right: 8px;
  bottom: 24px;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid rgba(72, 72, 72, 0.16);
  border-radius: 100%;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  background-color: white;
  cursor: pointer;
  outline: none;
  &:focus {
    box-shadow: 0 0 6px rgba(0, 132, 137, 0.5);
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;

const Image = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default () => (
  <Location>
    <Aside>
      <GoogleMap
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_KEY,
        }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={11}
      />
    </Aside>
    <Button>
      <Image src={pin} alt="GoogleMap" />
    </Button>
  </Location>
);
