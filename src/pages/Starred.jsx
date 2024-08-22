import { useQuery } from "@tanstack/react-query";
import { useStarredShows } from "../lib/useStarredShows";
import { getShowsByIds } from "../api/tvmade";
import ShowGrid from "../components/shows/ShowGrid";
import { TextCenter } from "../components/common/TextCenter"



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
        return <TextCenter>No starred shows</TextCenter>
    }
    if (starredShows?.length > 0) {
        return <ShowGrid apiData={starredShows} />
    }
    if (starredShowsError) {
        return <TextCenter>Error: {starredShowsError.message}</TextCenter>
    }


    return <TextCenter>Loading..</TextCenter>
}

export default Starred;