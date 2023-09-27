import CardDesign2 from "./CardDesign2";

const CardContainer2 = ({ obj }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {obj.map((item) => (
        <CardDesign2 key={item.id} item={item}></CardDesign2>
      ))}
    </div>
  );
};

export default CardContainer2;
