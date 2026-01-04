import CarDetailsPage from "@/pages/CarDetailsPage";
import ChatPage from "@/pages/ChatPage";
import ChatsPage from "@/pages/ChatsPage";
import EditListingPage from "@/pages/EditListingPage";
import ErrorPage from "@/pages/ErrorPage";
import FavoritesPage from "@/pages/FavoritesPage";
import HomePage from "@/pages/HomePage";
import InsertPage from "@/pages/InsertPage";
import Layout from "@/pages/Layout";
import LoginPage from "@/pages/LoginPage";
import ProfilePage from "@/pages/ProfilePage";
import SignUpPage from "@/pages/SignUpPage";
import UserListingsPage from "@/pages/UserListingsPage";
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
      {
        path: "listings",
        element: <UserListingsPage />,
      },
      {
        path: "listings/details/:listing_id",
        element: <CarDetailsPage />,
      },
      {
        path: "listings/edit/:listing_id",
        element: <EditListingPage />,
      },
      {
        path: "chats/",
        element: <ChatsPage />,
        children: [
          {
            path: ":id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
