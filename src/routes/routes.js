import Category from "../Pages/Home/Categories/Category";
import Login from "../Pages/Signin/Login/Login";
import Register from "../Pages/Signin/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home/Home");

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[

            {
                path:'/',
                element:<Home></Home>

            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]

    }
])