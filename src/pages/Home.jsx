import { useState } from "react";
import { searchForShows } from "../api/tvmade";


const Home = () => {
    const [searchStr, setsearchStr] = useState("");
    const [apiData, setApiData] = useState(null);
    const [apiDataError, setApiDataError] = useState(null);

    // setting search string 
    const onInputChange = (event) => {
        setsearchStr(event.target.value)
    }

    const onSearch = async (event) => {
        setApiDataError(null);

        // prevent from default action
        event.preventDefault();

        try {
            const result = await searchForShows(searchStr);
            setApiData(result);
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
            return apiData.map(data => (
                <div key={data.show.id}>{data.show.name}</div>
            ));
        }

        return null
    }

    // user view
    return (
        <div>
            <form onSubmit={onSearch}>
                <input type="text" onChange={onInputChange} value={searchStr} />
                <button type="submit">Search</button>
            </form>

            <div>
                {renderApiData()}
            </div>
        </div>)
}

export default Home;