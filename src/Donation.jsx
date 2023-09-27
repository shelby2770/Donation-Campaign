import { useEffect, useState } from "react";
import CardContainer2 from "./Components/CardContainer2";
import NoDonate from "./Components/NoDonate";

const Donation = () => {
  const [hasItem, setHasItem] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const get_items = localStorage.getItem("donations");
    if (get_items) setHasItem(true);
    else setHasItem(false);
    setItems(JSON.parse(get_items));
  });
  return (
    <div>
      {hasItem ? (
        <CardContainer2 obj={items}></CardContainer2>
      ) : (
        <NoDonate></NoDonate>
      )}
    </div>
  );
};

export default Donation;
