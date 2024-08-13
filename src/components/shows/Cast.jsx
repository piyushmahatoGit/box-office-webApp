const Cast = ({ cast }) => {
    return <div>
        <h3>Cast</h3>
        {
            cast.map((item) => <div key={item.person.id}>
                <img src={item.person.image ? item.person.image.medium : "Not Found"} />
                <p>{item.person.name}</p>
            </div>)
        }
    </div>
}

export default Cast;