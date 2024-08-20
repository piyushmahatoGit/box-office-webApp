import ShowCard from "./ShowCard";
import { useStarredShows } from "../../lib/useStarredShows";




const ShowGrid = ({ apiData }) => {
    const [starredShows, dispatchStarred] = useStarredShows();

    const starmeClick = (showId) => {
        const isStarred = starredShows.includes(showId);

        if (isStarred) {
            dispatchStarred({ type: 'UNSTAR', showId })
        } else {
            dispatchStarred({ type: 'STAR', showId })
        }

    }

    return <div>
        {apiData.map(data =>
            <ShowCard
                key={data.show.id}
                id={data.show.id}
                name={data.show.name}
                image={data.show.image ? data.show.image.medium : "not found"}
                summary={data.show.summary}
                starmeClick={starmeClick}
                isStarred={starredShows.includes(data.show.id)}
            />)
        }</div>
}

export default ShowGrid;