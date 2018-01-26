import React from "react";
import styled from "styled-components";
import Counter from "../UI/Counter";

const List = styled.div`
  max-width: 368px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Age = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Descr = styled.div``;

const Title = styled.h5`
  font-size: 18px;
  line-height: 21px;
  font-weight: normal;

  margin: 0 0 6px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 23px;

    margin: 0 0 7px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;

  margin: 0;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export default props => (
  <List>
    <Age>
      <Descr>
        <Title>Adults</Title>
      </Descr>
      <Counter
        id="adults"
        min={1}
        max={10}
        count={props.values.adults}
        onCounterChange={(id, count) =>
          props.onGuestsChange(props.name, id, count)
        }
      />
    </Age>
    <Age>
      <Descr>
        <Title>Children</Title>
        <Text>Ages 2 — 12</Text>
      </Descr>
      <Counter
        id="childs"
        min={0}
        max={10}
        count={props.values.childs}
        onCounterChange={(id, count) =>
          props.onGuestsChange(props.name, id, count)
        }
      />
    </Age>
    <Age>
      <Descr>
        <Title>Infants</Title>
        <Text>Under 2</Text>
      </Descr>
      <Counter
        id="infants"
        min={0}
        max={10}
        count={props.values.infants}
        onCounterChange={(id, count) =>
          props.onGuestsChange(props.name, id, count)
        }
      />
    </Age>
  </List>
);
