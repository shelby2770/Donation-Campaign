import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const DonationPageSolo = () => {
  const params = useParams();
  const obj = useLoaderData();
  const item = obj[params.id - 1];
  const handleItems = () => {
    const get_items = localStorage.getItem("donations");
    console.log(get_items);
    let update_items = get_items ? JSON.parse(get_items) : [];
    if (get_items) {
      let check = false;
      update_items.map((it) => {
        if (it.id === item.id) check = true;
      });
      if (check) {
        swal("Oops", "You have already donated!", "error");
      } else {
        swal("Good job!", "You have completed donation!", "success");
        update_items.push(item);
      }
    }
    localStorage.setItem("donations", JSON.stringify(update_items));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center justify-center h-[65vh] rounded-b-xl">
        <img className="h-[60vh] w-[90vw]" src={item.image} alt="" />
        <div className="p-4 -mt-[75px] h-[10vh] w-[90vw] bg-neutral-900 bg-opacity-60">
          <button
            className="btn rounded-r-md bg-primary_clr text-neutral-100"
            onClick={handleItems}
          >
            Donate {item.price}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap- 2">
        <h2 className="text-2xl font-semibold">{item.title}</h2>
        <p className="tex-xs text-neutral-500">{item.description}</p>
      </div>
    </div>
  );
};

export default DonationPageSolo;
