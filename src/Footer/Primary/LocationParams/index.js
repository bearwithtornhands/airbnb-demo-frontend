import React from 'react';
import styled from 'styled-components';
import bottom from './bottom.svg';

const Select = styled.select`
  font-size: 12px;
  line-height: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;

  display: block;
  width: 100%;
  overflow: hidden;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  appearance: none;
  padding: 11px 25px 11px 7px;
  background: url(${bottom}) no-repeat right 7px center;
  background-size: 11.5px auto;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;

    background-position: right 11px center;
    background-size: 15px auto;
    padding: 13px 37px 14px 7px;
    margin-bottom: 16px;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 23px;

    padding: 11px 47px 12px 15px;
    background-position: right 15px center;
  }
`;

const Option = styled.option``;

const LocationParams = styled.div`
  margin: 0;
  @media (min-width: 768px) {
    width: 176px;
    margin-right: 80px;
  }
  @media (min-width: 1200px) {
    width: 229px;
    margin-right: 99px;
  }
`;

export default () => (
  <LocationParams>
    <div className="row">
      <div className="col-xs-6 col-md-12">
        <Select>
          <Option value="0">English</Option>
          <Option value="1">Russia</Option>
        </Select>
      </div>
      <div className="col-xs-6 col-md-12">
        <Select>
          <Option value="0">United States dollar</Option>
          <Option value="1">Canada dollar</Option>
        </Select>
      </div>
    </div>
  </LocationParams>
);
