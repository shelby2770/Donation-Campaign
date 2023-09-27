import { useEffect, useState } from "react";
import NoDonate from "./Components/NoDonate";
import PieCalc from "./Components/PieCalc";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const obj = useLoaderData();
  const obj_len= obj.length
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
      {hasItem ? <PieCalc donate_len={items.length} obj_len= {obj_len}></PieCalc> : <NoDonate></NoDonate>}
    </div>
  );
};

export default Statistics;
