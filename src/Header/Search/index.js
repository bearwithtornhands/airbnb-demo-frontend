import React from "react";
import styled from "styled-components";
import searchImg from "./search.svg";

const Search = styled.div`
  width: 100%;
  max-width: 432px;
  @media (min-width: 1200px) {
    max-width: 392px;
  }
`;

const Form = styled.form``;

const Input = styled.input`
  font: normal normal 14px/24px "Circular", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  color: #383838;
  outline: none;
  width: 100%;
  padding: 11px 16px 11px 34px;
  background: url(${searchImg}) no-repeat left 11px center #ffffff;
  background-size: 15px auto;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  &::-webkit-input-placeholder {
    color: rgba(56, 56, 56, 0.64);
  }

  @media (min-width: 768px) {
    background-position: left 15px center;
    background-size: 20px auto;
    padding-left: 48px;
  }
`;

export default () => {
  return (
    <Search>
      <Form action="">
        <Input type="text" placeholder="Try “Miami”" />
      </Form>
    </Search>
  );
};
