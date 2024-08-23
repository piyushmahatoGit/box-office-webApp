import { FlexGrid } from "../common/FlexGrid";
import ActorsCard from "./ActorsCard";
import NotFoundImg from "../../lib/broken-image.png"
const ActorsGrid = ({ apiData }) => {
    return (
        <FlexGrid>{
            apiData.map(data => (
                <ActorsCard
                    key={data.person.id}
                    name={data.person.name}
                    country={data.person.country ? data.person.country.name : null}
                    gender={data.person.gender}
                    birthday={data.person.birthday}
                    deathday={data.person.deathday}
                    image={data.person.image ? data.person.image.medium : NotFoundImg}
                />
            ))}
        </FlexGrid>
    );
}

export default ActorsGrid;