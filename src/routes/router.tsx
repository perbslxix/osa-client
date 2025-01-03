import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import Home from "../pages/Home";
import Requirements from "../pages/Requirements";
import Application from "../pages/Application";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/requirements',
                element:<Requirements/>,
            },
            {
                path:'/application',
                element:<Application/>,
            },
        ]
    }
]);