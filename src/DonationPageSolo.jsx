import { useLoaderData, useParams } from "react-router-dom";

const DonationPageSolo = () => {
  const params = useParams();
  const obj = useLoaderData();
  const item = obj[params.id - 1];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center justify-center h-[65vh] rounded-b-xl">
        <img className="h-[60vh] w-[90vw]" src={item.image} alt="" />
        <div className="p-4 -mt-[75px] h-[10vh] w-[90vw] bg-neutral-900 bg-opacity-60">
          <button className="btn rounded-r-md bg-primary_clr text-neutral-100">
            Donate $290
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">{item.title}</h2>
        <p className="tex-xs text-neutral-500">{item.description}</p>
      </div>
    </div>
  );
};

export default DonationPageSolo;