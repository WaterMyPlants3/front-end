import React from "react";
import styled from "styled-components";
import { LoginBox, LoginButton } from "../styled/StyledComponents_LoginForm";

const SearchBarStyle = styled.input`
    border-radius: 25px;
    text-align: center;
    width: 60%
    height: 2rem;
    font-size: 1rem;
    padding: 4px;
    border: 1px solid grey;
    outline: none;
`;

const SearchBar = props => {
  return (
    <LoginBox>
      <form>
        <SearchBarStyle
          type="text"
          name="name"
          // placeholder="Search by name"
          autoComplete="off"
          value={props.input}
          onChange={props.handleChange}
        />
        <LoginButton id="search_button">Search</LoginButton>
      </form>
    </LoginBox>
  );
};
export default SearchBar;
