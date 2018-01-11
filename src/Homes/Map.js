import React, { Component } from "react";
import styled from "styled-components";
import GoogleMap from "google-map-react";

const Section = styled.div`
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

class Map extends Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  };

  render() {
    return (
      <Section>
        <GoogleMap
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAP_KEY
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </Section>
    );
  }
}

export default Map;
