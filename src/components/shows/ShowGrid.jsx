import ShowCard from "./ShowCard";

const ShowGrid = ({ apiData }) => {
    return <div>{
        apiData.map(data =>
            <ShowCard
                key={data.show.id}
                id={data.show.id}
                name={data.show.name}
                image={data.show.image ? data.show.image.medium : "not found"}
                summary={data.show.summary}
            />)
    }</div>
}

export default ShowGrid;