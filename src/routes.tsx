import { createBrowserRouter } from "react-router-dom";
import Home from "./containers/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
