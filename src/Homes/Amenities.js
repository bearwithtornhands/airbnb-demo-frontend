import React from "react";
import styled from "styled-components";
import Checkbox from "../UI/Checkbox";

const Amenities = styled.div``;

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
  <Amenities>
    <div className="row">
      <div className="col-xs-12 col-md-6">
        <Service>
          <Checkbox
            id="heating"
            checked={props.values.heating}
            onCheckboxChange={values => props.onChange(props.name, values)}
          >
            <Title>Heating</Title>
          </Checkbox>
        </Service>
      </div>
      <div className="col-xs-12 col-md-6">
        <Service>
          <Checkbox
            id="kitchen"
            checked={props.values.kitchen}
            onCheckboxChange={values => props.onChange(props.name, values)}
          >
            <Title>Kitchen</Title>
          </Checkbox>
        </Service>
      </div>
      <div className="col-xs-12 col-md-6">
        <Service>
          <Checkbox
            id="tv"
            checked={props.values.tv}
            onCheckboxChange={values => props.onChange(props.name, values)}
          >
            <Title>TV</Title>
          </Checkbox>
        </Service>
      </div>
      <div className="col-xs-12 col-md-6">
        <Service>
          <Checkbox
            id="wifi"
            checked={props.values.wifi}
            onCheckboxChange={values => props.onChange(props.name, values)}
          >
            <Title>Wireless Internet</Title>
          </Checkbox>
        </Service>
      </div>
    </div>
  </Amenities>
);
