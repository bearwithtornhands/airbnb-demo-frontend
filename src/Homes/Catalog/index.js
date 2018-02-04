import React from "react";
import styled from "styled-components";
import Card from "../Card";
import Pagination from "../Pagination";

const Section = styled.div`
  padding-top: 81px;
  @media (min-width: 1200px) {
    padding-right: 330px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #636363;
  text-align: center;

  margin: 0;
`;

const typeTitles = {
  entire_home: "Entire home",
  private_room: "Private room",
  shared_room: "Shared room"
};

export default class Catalog extends React.Component {
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
      <div key={home.id} className="col-xs-12 col-md-6">
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
      </div>
    ));

    return (
      <Section>
        <div className="row">{homesList}</div>
        <Pagination />
        <Text>
          Enter dates to see full pricing. Additional fees apply. Taxes may be
          added.
        </Text>
      </Section>
    );
  }
}
