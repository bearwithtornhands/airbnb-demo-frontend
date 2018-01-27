import React from "react";
import styled from "styled-components";
import Checkbox from "../UI/Checkbox";

const Facilities = styled.div``;

const Service = styled.div`
  margin-bottom: 16px;
`;

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
  <Facilities>
    <div className="row">
      <div className="col-xs-12 col-md-6">
        <Service>
          <Checkbox
            id="elebator"
            checked={props.values.elebator}
            onCheckboxChange={values => props.onChange(props.name, values)}
          >
            <Title>Elebator</Title>
          </Checkbox>
        </Service>
      </div>
      <div className="col-xs-12 col-md-6">
        <Service>
          <Checkbox
            id="parking"
            checked={props.values.parking}
            onCheckboxChange={values => props.onChange(props.name, values)}
          >
            <Title>Free parking on premises</Title>
          </Checkbox>
        </Service>
      </div>
      <div className="col-xs-12 col-md-6">
        <Service>
          <Checkbox
            id="pool"
            checked={props.values.pool}
            onCheckboxChange={values => props.onChange(props.name, values)}
          >
            <Title>Pool</Title>
          </Checkbox>
        </Service>
      </div>
      <div className="col-xs-12 col-md-6">
        <Service>
          <Checkbox
            id="wheelchair"
            checked={props.values.wheelchair}
            onCheckboxChange={values => props.onChange(props.name, values)}
          >
            <Title>Wheelchair accessible</Title>
          </Checkbox>
        </Service>
      </div>
    </div>
  </Facilities>
);
