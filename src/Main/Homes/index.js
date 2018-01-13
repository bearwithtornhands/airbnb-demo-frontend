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
import homeImg1 from "./home-1.png";
import homeImg2 from "./home-2.png";
import homeImg3 from "./home-3.png";

const ButtonRight = SliderRight.extend`
  top: 102px;
`;

const homesData = [
  {
    url: "#url",
    image: homeImg1,
    title: "La Salentina, see, nature, & relax",
    descr: "Entrie house · 9 bed",
    price: 82,
    superhost: 97
  },
  {
    url: "#url",
    image: homeImg2,
    title: "Yout private 3 bedr. riad and exclusive chanels in park",
    descr: "Entrie house · 5 bed",
    price: 55,
    superhost: 161
  },
  {
    url: "#url",
    image: homeImg3,
    title: "Dreamy Tropical Tree House",
    descr: "Entrie house · 9 bed",
    price: 300,
    superhost: 364
  }
];

export default () => {
  const list = homesData.map(function(home, index) {
    return (
      <div key={index} className="col-xs-6 col-md-4">
        <Card
          url={home.url}
          image={home.image}
          title={home.title}
          descr={home.descr}
          price={home.price}
          superhost={home.superhost}
        />
      </div>
    );
  });

  return (
    <Section>
      <Heading>
        <HeadingH2>Homes</HeadingH2>
        <HeadingLink to="/homes">See all</HeadingLink>
      </Heading>
      <SliderTrack>
        <div className="row">{list}</div>
        <ButtonRight type="button" />
      </SliderTrack>
    </Section>
  );
};
