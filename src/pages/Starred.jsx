import { useQuery } from "@tanstack/react-query";
import { useStarredShows } from "../lib/useStarredShows";
import { getShowsByIds } from "../api/tvmade";
import ShowGrid from "../components/shows/ShowGrid";



const Starred = () => {

    const [starredShowsids] = useStarredShows();

    const { data: starredShows, error: starredShowsError } = useQuery({
        queryKey: ['starred', starredShowsids],
        queryFn: () =>
            getShowsByIds(starredShowsids).then(result =>
                result.map(show => ({ show }))
            ),
        refetchOnWindowFocus: false
    });

    if (starredShows?.length === 0) {
        return <h2>No starred shows</h2>
    }
    if (starredShows?.length > 0) {
        return <ShowGrid apiData={starredShows} />
    }
    if (starredShowsError) {
        return <h3>Error: {starredShowsError.message}</h3>
    }


    return <div>Loading..</div>
}

export default Starred;