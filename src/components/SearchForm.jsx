import { useState } from "react";

const SearchForm = ({ onSearch }) => {

    const [searchStr, setsearchStr] = useState("");
    const [searchOption, setSearchOption] = useState("shows");

    const onInputChange = (event) => {
        setsearchStr(event.target.value)
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

                <label>
                    Shows
                    <input
                        type="radio"
                        name="search-option"
                        value="shows"
                        checked={searchOption === 'shows'}
                        onChange={onRadioChange}
                    />
                </label>
                <label>
                    Actors
                    <input
                        type="radio"
                        name="search-option"
                        value="actors"
                        checked={searchOption === 'actors'}
                        onChange={onRadioChange}
                    />
                </label>
            </form>
        </div>)
}

export default SearchForm;