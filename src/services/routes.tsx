import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import Layout from "@/pages/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
