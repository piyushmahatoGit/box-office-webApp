import { useParams } from "react-router-dom"

const Show = () => {
    const params = useParams()
    const { showId } = params;
    return <div>show {showId} </div>
}

export default Show