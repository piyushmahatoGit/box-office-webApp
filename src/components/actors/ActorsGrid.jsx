import { FlexGrid } from "../common/FlexGrid";
import ActorsCard from "./ActorsCard";
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
                    image={data.person.image ? data.person.image.medium : "not found"}
                />
            ))}
        </FlexGrid>
    );
}

export default ActorsGrid;