import { useState } from "react";
import { useSearchStr } from "../lib/useSearchStr";
import CustomRadio from "./CustomRadio";

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
                <input type="text" onChange={onInputChange} value={searchStr} />
                <button type="submit">Search</button>

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
            </form>
        </div>)
}

export default SearchForm;