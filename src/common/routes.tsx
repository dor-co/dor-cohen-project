import { createBrowserRouter } from "react-router-dom";
import MyStore from "../containers/MyStore";
import About from "../containers/About";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MyStore />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
