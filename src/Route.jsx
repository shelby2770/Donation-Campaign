import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Donation from "./Donation";
import Statistics from "./Statistics";

const create_route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
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
