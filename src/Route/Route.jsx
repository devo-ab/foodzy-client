import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
