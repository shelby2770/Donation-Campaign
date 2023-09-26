import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Donation from "./Donation";
import Statistics from "./Statistics";
import Home from "./Home";

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
    ],
  },
]);
export default create_route;
