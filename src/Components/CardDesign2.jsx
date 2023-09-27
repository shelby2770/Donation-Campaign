import { Link } from "react-router-dom";

const CardDesign2 = ({ item }) => {
  return (
    <div className="flex flex-row bg-base-100 shadow-xl rounded-lg">
      <img className="h-auto w-[150px] rounded-l-lg" src={item.image} alt="" />
      <div
        className="p-4 w-full rounded-r-lg"
        style={{
          backgroundColor: item.category_bg,
          color: item.text_bg,
        }}
      >
        <div
          className="p-2 flex items-center w-fit h-6 rounded-sm"
          style={{ backgroundColor: item.card_bg }}
        >
          <h3 className="py-2 text-xs">{item.category}</h3>
        </div>
        <div className="py-2 flex font-bold text-lg text-black">
          {item.title}
        </div>
        <p className="font-semibold">{item.price}</p>
        <button
          className="btn rounded-r-md text-neutral-100"
          style={{
            backgroundColor: item.text_bg,
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CardDesign2;
