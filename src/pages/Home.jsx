import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { searchForShows, searchForPeople } from "../api/tvmade";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/shows/ShowGrid";
import ActorsGrid from "../components/actors/ActorsGrid";
import { TextCenter } from "../components/common/TextCenter";

const Home = () => {

    const [filter, setFilter] = useState(null);
    const { data: apiData, error: apiDataError } = useQuery({
        queryKey: ['search', filter],
        queryFn: () => filter.searchOption === 'shows' ? searchForShows(filter.searchStr) : searchForPeople(filter.searchStr),
        enabled: !!filter,
        refetchOnWindowFocus: false
    })
    // const [apiData, setApiData] = useState(null);
    // const [apiDataError, setApiDataError] = useState(null);





    const onSearch = async ({ searchStr, searchOption }) => {
        setFilter({ searchStr, searchOption });

        // // prevent from default action
        // let result;

        // try {
        //     if (searchOption === 'shows') {
        //         result = await searchForShows(searchStr);

        //     } else {
        //         result = await searchForPeople(searchStr);

        //     }
        //     setApiData(result);
        // } catch (error) {
        //     setApiDataError(error)
        // }
    }


    // conditional rending from the api data
    const renderApiData = () => {
        // checking the error
        if (apiDataError) {
            return <TextCenter>Error : {apiDataError.message}</TextCenter>
        }
        // checking data 
        if (apiData?.length === 0) {
            return <TextCenter>no result</TextCenter>
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