import { createBrowserRouter } from "react-router-dom";
import MyStore from "../containers/MyStore";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MyStore />,
  },
]);
