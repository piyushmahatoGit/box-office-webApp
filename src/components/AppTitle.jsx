export default function AppTitle(props) {
    const {
        title = "Box Office",
        paragraph = "Are you looking for a movie or an actor?"
    } = props;
    return (
        <div>
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
    )
}   