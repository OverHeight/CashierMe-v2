import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages";
import Auth from "./pages/Auth/Index";
import Dashboard from "./pages/App";
import Resources from "./pages/App/Resources";
import Menu from "./pages/App/Menu";
import AddItem from "./pages/App/Add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/app",
    element: <Dashboard />,
  },
  {
    path: "app/menu",
    element: <Menu />,
  },
  {
    path: "app/resources",
    element: <Resources />,
  },
  {
    path: "app/resources/add",
    element: <AddItem />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
