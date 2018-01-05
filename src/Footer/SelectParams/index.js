import React from "react";
import styled from "styled-components";
import bottom from "./bottom.svg";

const Select = styled.select`
  font-size: 12px;
  line-height: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;

  display: block;
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  outline: none;
  -webkit-appearance: none;
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
  }
  @media (min-width: 1200px) {
    background-position: right 15px center;
  }
`;

const Option = styled.option``;

const Selects = styled.div`
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

const SelectsList = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 -9px;
  @media (min-width: 768px) {
    display: block;
    margin: -8px 0;
  }
`;

const SelectsColumn = styled.div`
  padding: 0 9px;
  width: 50%;
  @media (min-width: 768px) {
    padding: 8px 0;
    width: 100%;
  }
`;

export default () => {
  return (
    <Selects>
      <SelectsList>
        <SelectsColumn>
          <Select>
            <Option value="0">English</Option>
            <Option value="1">Russia</Option>
          </Select>
        </SelectsColumn>
        <SelectsColumn>
          <Select>
            <Option value="0">United States dollar</Option>
            <Option value="1">Canada dollar</Option>
          </Select>
        </SelectsColumn>
      </SelectsList>
    </Selects>
  );
};
