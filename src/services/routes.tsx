import ErrorPage from "@/pages/ErrorPage";
import FavoritesPage from "@/pages/FavoritesPage";
import HomePage from "@/pages/HomePage";
import InsertPage from "@/pages/InsertPage";
import Layout from "@/pages/Layout";
import LoginPage from "@/pages/LoginPage";
import ProfilePage from "@/pages/ProfilePage";
import SignUpPage from "@/pages/SignUpPage";
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
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "insert",
        element: <InsertPage />,
      },
    ],
  },
]);

export default router;
