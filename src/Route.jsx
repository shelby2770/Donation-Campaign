import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Donation from "./Donation";
import Statistics from "./Statistics";
import Home from "./Home";
import DonationPageSolo from "./DonationPageSolo";

const create_route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../../public/fake_data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/item/:id",
        element: <DonationPageSolo></DonationPageSolo>,
        loader: () => fetch("../../public/fake_data.json"),
      },
    ],
  },
]);
export default create_route;
