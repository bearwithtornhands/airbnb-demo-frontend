import React from "react";
import styled from "styled-components";
import Counter from "../UI/Counter";

const RoomsAndBeds = styled.div`
  max-width: 368px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Service = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Descr = styled.div``;

const Title = styled.h5`
  font-size: 16px;
  line-height: 19px;
  font-weight: 300;

  margin: 0;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export default props => (
  <RoomsAndBeds>
    <Service>
      <Descr>
        <Title>Bedrooms</Title>
      </Descr>
      <Counter
        id="bedrooms"
        min={0}
        max={10}
        count={props.values.bedrooms}
        onCounterChange={value => props.onChange(props.name, {bedrooms: value, beds: props.values.beds, bathrooms: props.values.bathrooms})}
      />
    </Service>
    <Service>
      <Descr>
        <Title>Beds</Title>
      </Descr>
      <Counter
        id="beds"
        min={0}
        max={10}
        count={props.values.beds}
        onCounterChange={value => props.onChange(props.name, {bedrooms: props.values.bedrooms, beds: value, bathrooms: props.values.bathrooms})}
      />
    </Service>
    <Service>
      <Descr>
        <Title>Bathrooms</Title>
      </Descr>
      <Counter
        id="bathrooms"
        min={0}
        max={10}
        count={props.values.bathrooms}
        onCounterChange={value => props.onChange(props.name, {bedrooms: props.values.bedrooms, beds: props.values.beds, bathrooms: value})}
      />
    </Service>
  </RoomsAndBeds>
);
