import React from "react";
import styled from "styled-components";
import {
  Section,
  Heading,
  HeadingH2,
  HeadingLink,
  SliderTrack,
  SliderRight
} from "../../UI";
import Card from "../../Homes/Card";

const ButtonRight = SliderRight.extend`
  top: 102px;
`;

const Scroll = styled.div`
  display: flex;
  overflow: auto;
`;

const List = styled.div`
  display: flex;
  margin: 0 -8px;
`;

const Slide = styled.div`
  width: 213px;
  padding: 0 8px;
  @media (min-width: 768px) {
    width: 320px;
  }
  @media (min-width: 1200px) {
    width: 326px;
  }
`;

const typeTitles = {
  entire_home: "Entire home",
  private_room: "Private room",
  shared_room: "Shared room"
};

export default class Homes extends React.Component {
  state = {
    data: []
  };

  componentWillMount() {
    fetch("https://airbnb-demo-api.now.sh/v1/homes")
      .then(response => response.json())
      .then(data => this.setState({ data: data.items }))
      .catch(error => console.error(error));
  }

  render() {
    const { data = [] } = this.state;
    const homesList = data.map(home => (
      <Slide key={home.id}>
        <Card
          url={"/"}
          image={home.images[0].picture}
          title={home.name}
          descr={`${typeTitles[home.kind]} · ${home.bedsCount} ${
            home.bedsCount === 1 ? "bed" : "beds"
          }`}
          price={home.price}
          isSuperhost={home.isSuperhost}
          rating={home.rating}
          reviews={home.reviewsCount}
        />
      </Slide>
    ));

    return (
      <Section>
        <Heading>
          <HeadingH2>Homes</HeadingH2>
          <HeadingLink to="/homes">See all</HeadingLink>
        </Heading>
        <SliderTrack>
          <Scroll>
            <List>{homesList}</List>
          </Scroll>
          <ButtonRight type="button" />
        </SliderTrack>
      </Section>
    );
  }
}
