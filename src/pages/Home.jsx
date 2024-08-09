import { useState } from "react";
import { searchForShows, searchForPeople } from "../api/tvmade";


const Home = () => {
    const [searchStr, setsearchStr] = useState("");
    const [apiData, setApiData] = useState(null);
    const [apiDataError, setApiDataError] = useState(null);
    const [searchOption, setSearchOption] = useState("shows");




    // setting search string 
    const onInputChange = (event) => {
        setsearchStr(event.target.value)
    }

    const onRadioChange = (event) => {
        setSearchOption(event.target.value);
    }

    const onSearch = async (event) => {
        setApiDataError(null);

        // prevent from default action
        event.preventDefault();
        try {
            if (searchOption === 'shows') {
                const result = await searchForShows(searchStr);
                setApiData(result);
            } else {
                const result = await searchForPeople(searchStr);
                setApiData(result);
            }
        } catch (error) {
            setApiDataError(error)
        }
    }


    // conditional rending from the api data
    const renderApiData = () => {
        // checking the error
        if (apiDataError) {
            return <div>Error : {apiDataError.message}</div>
        }
        // checking data 

        if (apiData) {
            return apiData[0].show ? apiData.map(data => (
                <div key={data.show.id}>{data.show.name}</div>
            )) : apiData.map(data => (
                <div key={data.person.id}>{data.person.name}</div>
            ));
        }


        return null;
    }



    // user view
    return (
        <div>
            <form onSubmit={onSearch}>
                <input type="text" onChange={onInputChange} value={searchStr} />
                <button type="submit">Search</button>

                <label>
                    Shows
                    <input type="radio" name="search-option" value="shows" checked={searchOption === 'shows'} onChange={onRadioChange} />
                </label>
                <label>
                    Actors
                    <input type="radio" name="search-option" value="actors" checked={searchOption === 'actors'} onChange={onRadioChange} />
                </label>
            </form>

            <div>
                {renderApiData()}
            </div>
        </div>)
}

export default Home;