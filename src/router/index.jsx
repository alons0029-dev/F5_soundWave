
// REACT-ROUTER-DOM Components
import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import Discover from "../pages/Discover/Discover";
import Join from "../pages/Join/Join";

/* ROUTER */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,  
    },
    {
        path: "/discover",
        element: <Discover />
    },
    {
        path: "/join",
        element: <Join />
    }
])