import { useState } from "react";
const Home = () => {

    const [searchStr, setsearchStr] = useState("");
    console.log(searchStr);


    const onInputChange = (event) => {
        setsearchStr(event.target.value)
    }

    const onSearch = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`);
        const body = await response.json();
        console.log(body)
        // https://api.tvmaze.com/search/shows?q=boys
    }
    return (
        <div>
            <form onSubmit={onSearch}>
                <input type="text" onChange={onInputChange} value={searchStr} />
                <button type="submit">Search</button>
            </form>
        </div>)
}
export default Home;