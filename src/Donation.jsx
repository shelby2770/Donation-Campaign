import NoDonate from "./Components/NoDonate";

const Donation = () => {
    const get_items= localStorage.getItem("donations")
    return (
        <div>
            <NoDonate></NoDonate>
        </div>
    );
};

export default Donation;