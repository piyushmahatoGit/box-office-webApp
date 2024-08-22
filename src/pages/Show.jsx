// import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from "react-router-dom";
import { getShowById } from "../api/tvmade";
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';
import styled from 'styled-components';
import { TextCenter } from '../components/common/TextCenter';

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
        return (
            <ShowPageWrapper>
                <BackHomeWrapper>
                    <Link to="/">Go Back</Link>
                </BackHomeWrapper>
                <ShowMainData
                    image={showData.image ? showData.image.original : "No image found"}
                    name={showData.name}
                    language={showData.language}
                    rating={showData.rating.average}
                    summary={showData.summary}
                    genres={showData.genres}
                />
                <InfoBlock>
                    <h2>Details</h2>
                    <Details
                        status={showData.status}
                        premiered={showData.premiered}
                        network={showData.network}
                    />
                </InfoBlock>

                <InfoBlock>
                    <h2>Seasons</h2>
                    <Seasons
                        seasons={showData._embedded.seasons} />
                </InfoBlock>

                <InfoBlock>
                    <h2>Cast</h2>
                    <Cast cast={showData._embedded.cast} />
                </InfoBlock>

            </ShowPageWrapper>)
    }

    return <TextCenter>Loading... </TextCenter>
}

export default Show
const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;