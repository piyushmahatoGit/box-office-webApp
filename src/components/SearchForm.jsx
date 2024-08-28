import { useState } from "react";
import { useSearchStr } from "../lib/useSearchStr";
import CustomRadio from "./CustomRadio";
import styled from "styled-components";

const SearchForm = ({ onSearch }) => {

  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState("shows");

  const onInputChange = (event) => {
    setSearchStr(event.target.value)
  }

  const onRadioChange = (event) => {
    setSearchOption(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const options = {
      searchStr: searchStr,
      searchOption: searchOption
    }
    onSearch(options);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <SearchInput
          placeholder="type here..."
          type="text"
          onChange={onInputChange}
          value={searchStr}
        />

        <RadiosWrapper>
          <CustomRadio
            label="Shows"
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
          />

          <CustomRadio
            label="Actors"
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === 'actors'}
            onChange={onRadioChange}
          />
        </RadiosWrapper>
        <SearchButtonWrapper>
          <button type="submit">Search</button>
        </SearchButtonWrapper>
      </form>
    </div>)
}

export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: 'Arial', sans-serif;
  width: 300px;
  margin: auto;
  outline: none;
  padding: 7px 15px;
  border: 1px solid black;
  font-size: 14px;
  border-radius: 30px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;