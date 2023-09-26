import CardDesign1 from "./CardDesign1";

const CardContainer1 = ({ obj }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {obj.map((item) => (
        <CardDesign1 key={item.id} item={item}></CardDesign1>
      ))}
    </div>
  );
};

export default CardContainer1;
