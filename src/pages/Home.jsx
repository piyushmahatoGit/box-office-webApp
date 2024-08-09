import { useState } from "react";
import { searchForShows, searchForPeople } from "../api/tvmade";
import SearchForm from "../components/SearchForm";


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
            <SearchForm
                onSearch={onSearch}
            />
            <div>
                {renderApiData()}
            </div>
        </div>)
}

export default Home;