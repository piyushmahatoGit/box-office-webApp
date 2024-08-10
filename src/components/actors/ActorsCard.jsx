import { Link } from "react-router-dom"

const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {

    return (
        <div>
            <div>
                <img src={image} />
            </div>
            <h1>{name} {!!gender && `(${gender})`}</h1>
            <p>{country ? `From ${country}` : 'No country known'}</p>
            {!!birthday && `Born: ${birthday}`}
            <p>{deathday ? `Died: ${deathday}` : 'Alive'}</p>
            <div>
                <Link to="/">Read more</Link>
                <button type="button">Star</button>
            </div>
        </div>)
}

export default ActorsCard