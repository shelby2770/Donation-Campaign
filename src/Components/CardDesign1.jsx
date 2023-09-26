import { Link } from "react-router-dom";

const CardDesign1 = ({ item }) => {
//   console.log([item]);
  // const [items, setItems] = useState([]);
  // console.log(localStorage.getItem("donations"));
  // useEffect(() => {
  // //   const get_items = localStorage.getItem("donations");
  //   let update_items = [item];
  //   if (get_items) {
  //     update_items.push(JSON.parse(get_items));
  //   }
  //   setItems(update_items);
  //   localStorage.setItem("donations", JSON.stringify(items));
  // });

  return (
    <div className="bg-base-100 shadow-xl rounded-lg">
      <Link to={`/item/${item.id}`}>
        <figure className="">
          <img className="w-full" src={item.image} alt="" />
        </figure>
        <div
          className="rounded-b-lg p-2"
          style={{
            backgroundColor: item.category_bg,
            color: item.text_bg,
          }}
        >
          <div
            className="p-2 flex items-center w-fit h-6 rounded-sm"
            style={{ backgroundColor: item.card_bg }}
          >
            <h3 className="py-2 text-xs font-semibold">{item.category}</h3>
          </div>
          <div className="py-2 flex font-semibold">{item.title}</div>
        </div>
      </Link>
    </div>
  );
};

export default CardDesign1;
