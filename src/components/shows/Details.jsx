import styled from "styled-components";

const Details = ({ status, premiered, network }) => {
    return <div>
        <h3>Details</h3>
        <DetailsWrapper>
            <p>Status: {status}</p>
            <p>Premiered: {premiered} {network ? `on ${network.name}` : ""}</p>

        </DetailsWrapper>
    </div>
}

export default Details;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;