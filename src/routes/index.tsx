import Layout from "../components/Layout";
import TebakAngka from "../pages/tebakAngka";
import Gallery from "../pages/gallery";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TebakAngka />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);
