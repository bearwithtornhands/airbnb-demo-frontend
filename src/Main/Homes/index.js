import React from "react";
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

export default class Homes extends React.Component {
  state = {
    data: []
  };

  homesTemp = data => {
    if (data.length) {
      return data.map(item => (
        <div key={item.id} className="col-xs-6 col-md-4">
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
        <Heading>
          <HeadingH2>Homes</HeadingH2>
          <HeadingLink to="/homes">See all</HeadingLink>
        </Heading>
        <SliderTrack>
          <div className="row">{homesList}</div>
          <ButtonRight type="button" />
        </SliderTrack>
      </Section>
    );
  }
}
