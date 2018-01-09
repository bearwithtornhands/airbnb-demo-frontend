import React, { Component } from "react";
import styled from "styled-components";
import GoogleMap from "google-map-react";

const HomesMapWrap = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    width: calc( (100vw - 966px)/2 + (330px - 16px));
    position: fixed;
    top: 136px;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

class HomesMap extends Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  };

  render() {
    return (
      <HomesMapWrap>
        <GoogleMap
          key={"AIzaSyDOeq-g19KTxtyknIn2wj_qow-PiK-_sCQ"}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </HomesMapWrap>
    );
  }
}

export default HomesMap;
