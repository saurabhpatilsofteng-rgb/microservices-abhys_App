import { createBrowserRouter } from "react-router-dom";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

import Dashboard from "../pages/Dashboard";
import Modules from "../pages/dsa/Modules";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },

    {
        path: "/login",
        element: <Login />
    },

    {
        path: "/register",
        element: <Register />
    },

    {
        path: "/dashboard",
        element: <Dashboard />
    },

    {
        path: "/modules",
        element: <Modules />
    }
]);