const CardDesign1 = ({ item }) => {
  return (
    <div className="bg-base-100 shadow-xl rounded-lg">
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
        <div className="p-2 flex items-center w-fit h-6 rounded-sm" style={{backgroundColor: item.card_bg}}>
          <h3 className="py-2 text-sm font-semibold">{item.category}</h3>
        </div>
        <div className="py-2 flex font-semibold text-xl">{item.title}</div>
      </div>
    </div>
  );
};

export default CardDesign1;
