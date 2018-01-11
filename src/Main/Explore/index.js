import React from "react";
import { H2, Section } from "../../UI";
import Card from "./Card";
import categoryImage1 from "./category-1.jpg";
import categoryImage2 from "./category-2.jpg";
import categoryImage3 from "./category-3.jpg";

const categoryData = [
  {
    url: "/homes",
    image: categoryImage1,
    title: "Homes"
  },
  {
    url: "#url",
    image: categoryImage2,
    title: "Experiences"
  },
  {
    url: "#url",
    image: categoryImage3,
    title: "Restaurants"
  }
];

export default props => {
  const list = categoryData.map(function(item, index) {
    return (
      <div key={index} className="col-xs-6 col-md-4">
        <Card url={item.url} image={item.image} title={item.title} />
      </div>
    );
  });

  return (
    <Section>
      <H2>Explore Airbnb</H2>
      <div className="row">{list}</div>
    </Section>
  );
};
