import { Link } from "react-router-dom";

const CardDesign1 = ({ item }) => {
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
          <div className="py-2 flex lg:text-sm font-semibold">{item.title}</div>
        </div>
      </Link>
    </div>
  );
};

export default CardDesign1;
