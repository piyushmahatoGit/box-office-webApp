import { useState } from "react";
import { searchForShows, searchForPeople } from "../api/tvmade";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/shows/ShowGrid";
import ActorsGrid from "../components/actors/ActorsGrid";


const Home = () => {
    const [apiData, setApiData] = useState(null);
    const [apiDataError, setApiDataError] = useState(null);



    const onSearch = async ({ searchStr, searchOption }) => {
        setApiDataError(null);

        // prevent from default action
        let result;

        try {
            if (searchOption === 'shows') {
                result = await searchForShows(searchStr);

            } else {
                result = await searchForPeople(searchStr);

            }
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
        if (apiData?.length === 0) {
            return <div>no result</div>
        }

        if (apiData) {
            return apiData[0].show ? <ShowGrid apiData={apiData} /> : <ActorsGrid apiData={apiData} />;
        }
        return null;
    }



    // user view
    return (
        <div>
            <SearchForm
                onSearch={onSearch}
            />
            <div>
                {renderApiData()}
            </div>
        </div>)
}

export default Home;