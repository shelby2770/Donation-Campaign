import { useLoaderData } from "react-router-dom";
import Banner from "./Components/Banner";
import CardContainer1 from "./Components/CardContainer1";

const Home = () => {
    const obj= useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <CardContainer1 obj= {obj}></CardContainer1>
        </div>
    );
};

export default Home;