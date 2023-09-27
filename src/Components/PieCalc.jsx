import { PieChart } from "react-minimal-pie-chart";

function PieCalc({ donate_len, obj_len }) {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      <PieChart
        data={[
          { title: "One", value: donate_len, color: "#FF444A" },
          { title: "Two", value: obj_len, color: "#00C49F" },
        ]}
      />
      <div className="flex flex-row gap-8 mt-8">
        <div className="flex flex-row gap-2 items-center rounded-md">
          <p>Your Donation</p>
          <div className="bg-[#FF444A] w-[20vw] h-[2vh]"></div>
        </div>
        <div className="flex flex-row gap-2 items-center rounded-md">
          <p>Total Donation</p>
          <div className="bg-[#00C49F] w-[20vw] h-[2vh]"></div>
        </div>
      </div>
    </div>
  );
}

export default PieCalc;
