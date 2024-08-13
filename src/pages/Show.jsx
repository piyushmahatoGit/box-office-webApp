// import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvmade";
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';

// const useShowById = (showId) => {
//     const [showData, setShowData] = useState(null);
//     const [showError, setShowError] = useState(null);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const data = await getShowById(showId);
//                 setShowData(data);
//             } catch (error) {
//                 setShowError(error);
//             }
//         }
//         fetchData();
//     }, [showId]);
//     return { showData, showError }
// }

const Show = () => {
    const { showId } = useParams();
    // const { showData, showError } = useShowById(showId)
    const { data: showData, error: showError } = useQuery({
        queryKey: ['show', showId],
        queryFn: () => getShowById(showId)
    });


    if (showError) {
        return <div>There is an error: {showError}</div>
    }

    if (showData) {
        return <div>
            <ShowMainData
                image={showData.image ? showData.image.original : "No image found"}
                name={showData.name}
                language={showData.language}
                rating={showData.rating.average}
                summary={showData.summary}
                genres={showData.genres}
            />
            <Details
                status={showData.status}
                premiered={showData.premiered}
                network={showData.network}
            />
        </div>
    }

    return <div>Loading... </div>
}

export default Show