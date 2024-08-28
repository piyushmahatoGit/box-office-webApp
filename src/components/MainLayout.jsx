import { Outlet } from "react-router-dom";
import Navs from "./Navs";
import AppTitle from "./AppTitle";
import styled from "styled-components";

const MainLayout = () => {
    return (<Wrapper>
        <AppTitle />
        <Navs />
        <Outlet />
    </Wrapper>);
}

export default MainLayout;
// style={{ marginTop: "-40px", padding: "50px", backgroundColor: "yellow", width: "100vw", height: " 100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }
const Wrapper = styled.div`
    margin-top: -40px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;