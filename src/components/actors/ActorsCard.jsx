
import { SearchCard, SearchImgWrapper } from "../common/SearchCard"

const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {

    return (
        <SearchCard>
            <SearchImgWrapper>
                <img src={image} />
            </SearchImgWrapper>
            <h1>{name} {!!gender && `(${gender})`}</h1>
            <p>{country ? `From ${country}` : 'No country known'}</p>
            {!!birthday && `Born: ${birthday}`}
            <p>{deathday ? `Died: ${deathday}` : 'Alive'}</p>

        </SearchCard>
    );
}

export default ActorsCard