import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import Pagination from '../Pagination';
import homeImg1 from './home-1.png';
import homeImg2 from './home-2.png';
import homeImg3 from './home-3.png';

const homesData = [
  {
    id: 1,
    url: '#url',
    image: homeImg1,
    title: 'La Salentina, see, nature, & relax',
    descr: 'Entrie house · 9 bed',
    price: 82,
    superhost: 97,
  },
  {
    id: 2,
    url: '#url',
    image: homeImg2,
    title: 'Yout private 3 bedr. riad and exclusive chanels in park',
    descr: 'Entrie house · 5 bed',
    price: 55,
    superhost: 161,
  },
  {
    id: 3,
    url: '#url',
    image: homeImg3,
    title: 'Dreamy Tropical Tree House',
    descr: 'Entrie house · 9 bed',
    price: 300,
    superhost: 364,
  },
];

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

export default () => {
  const homesList = homesData.map(home => (
    <div key={home.id} className="col-xs-12 col-md-6">
      <Card
        url={home.url}
        image={home.image}
        title={home.title}
        descr={home.descr}
        price={home.price}
        superhost={home.superhost}
      />
    </div>
  ));

  return (
    <Section>
      <div className="row">{homesList}</div>
      <Pagination />
      <Text>Enter dates to see full pricing. Additional fees apply. Taxes may be added.</Text>
    </Section>
  );
};
