const ShowMainData = ({ image, name, language, rating, summary, genres }) => {
    return <div>
        <img src={image} />
        <h2>{name}</h2>
        <p>{language}, {rating || "N/A"}</p>
        <p dangerouslySetInnerHTML={
            { __html: summary }
        } />
        <div>
            {genres.map((genre) => <span key={genre}>{genre} </span>)}
        </div>

    </div>
}

export default ShowMainData;