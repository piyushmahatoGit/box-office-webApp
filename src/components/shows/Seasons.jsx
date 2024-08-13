const Seasons = ({ seasons }) => {
    return <div>
        <h3>Seasons</h3>
        <p>Total seasons: {seasons.length}</p>
        <p>Total episodes: {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}</p>

        <div>
            {seasons.map(season => <div key={season.id}>
                <p>Season: {season.number}</p>
                <p>Episode: {season.episodeOrder}</p>

                <div>
                    <p>Aired: {season.premiereDate} - {season.endDate}</p>
                </div>
            </div>)}
        </div>

    </div>
}

export default Seasons