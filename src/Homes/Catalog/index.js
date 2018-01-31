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

export default class Catalog extends React.Component {
  state = {
    data: []
  };

  homesTemp = data => {
    if (data.length) {
      return data.map(item => (
        <div key={item.id} className="col-xs-12 col-md-6">
          <Card
            url={"/"}
            image={item.images[0].picture}
            title={item.name}
            descr={"descr"}
            price={"price"}
            isSuperhost={item.isSuperhost}
            reviews={item.reviewsCount}
          />
        </div>
      ));
    }

    return [];
  };

  componentDidMount() {
    fetch("https://airbnb-demo-api.now.sh/v1/homes")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ data: data.items }))
      .catch(error => console.log(error));
  }

  render() {
    const { data } = this.state;
    const homesList = this.homesTemp(data);

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
