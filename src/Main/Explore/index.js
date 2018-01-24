import React from 'react';
import { H2, Section } from '../../UI';
import Card from './Card';
import categoryImage1 from './category-1.jpg';
import categoryImage2 from './category-2.jpg';
import categoryImage3 from './category-3.jpg';

const exploreData = [
  {
    id: 1,
    url: '/homes',
    image: categoryImage1,
    title: 'Homes',
  },
  {
    id: 2,
    url: '#url',
    image: categoryImage2,
    title: 'Experiences',
  },
  {
    id: 3,
    url: '#url',
    image: categoryImage3,
    title: 'Restaurants',
  },
];

export default () => {
  const list = exploreData.map(explore => (
    <div key={explore.id} className="col-xs-6 col-md-4">
      <Card url={explore.url} image={explore.image} title={explore.title} />
    </div>
  ));

  return (
    <Section>
      <H2>Explore Airbnb</H2>
      <div className="row">{list}</div>
    </Section>
  );
};
