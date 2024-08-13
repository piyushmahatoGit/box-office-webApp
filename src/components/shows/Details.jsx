const Details = ({ status, premiered, network }) => {
    return <div>
        <h3>Details</h3>
        <div>
            <p>Status: {status}</p>
            <p>Premiered: {premiered} {network ? `on ${network.name}` : ""}</p>

        </div>
    </div>
}

export default Details;