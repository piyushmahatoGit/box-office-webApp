import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvmade";

const Show = () => {
    const { showId } = useParams();

    const [showData, setShowData] = useState(null);
    const [showError, setShowError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getShowById(showId);
                setShowData(data);
            } catch (error) {
                setShowError(error);
            }
        }
        fetchData()
    }, [showId])

    if (showError) {
        return <div>There is an error: {showError}</div>
    }

    if (showData) {
        return <div>Showing {showData.name}</div>
    }

    return <div>Loading... </div>
}

export default Show