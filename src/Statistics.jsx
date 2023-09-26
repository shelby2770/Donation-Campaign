import NoDonate from "./Components/NoDonate";

const Statistics = () => {
    const get_items= localStorage.getItem("donations")
    return (
        <div>
            <NoDonate></NoDonate>
        </div>
    );
};

export default Statistics;