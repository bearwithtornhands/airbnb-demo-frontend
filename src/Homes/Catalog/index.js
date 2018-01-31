import React from "react";
import styled from "styled-components";
import Card from "../Card";
import Pagination from "../Pagination";
// import homeImg1 from "./home-1.png";
// import homeImg2 from "./home-2.png";
// import homeImg3 from "./home-3.png";

// const homesData = [
//   {
//     id: 1,
//     url: "#url",
//     image: homeImg1,
//     title: "La Salentina, see, nature, & relax",
//     descr: "Entrie house · 9 bed",
//     price: 82,
//     superhost: 97
//   },
//   {
//     id: 2,
//     url: "#url",
//     image: homeImg2,
//     title: "Yout private 3 bedr. riad and exclusive chanels in park",
//     descr: "Entrie house · 5 bed",
//     price: 55,
//     superhost: 161
//   },
//   {
//     id: 3,
//     url: "#url",
//     image: homeImg3,
//     title: "Dreamy Tropical Tree House",
//     descr: "Entrie house · 9 bed",
//     price: 300,
//     superhost: 364
//   }
// ];

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
