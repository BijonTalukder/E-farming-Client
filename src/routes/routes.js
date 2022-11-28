import DeshBoard from "../DeshBoard/DeshBoard";
import AdminDeshBoard from "../DeshBoard/AdminDeshBoard";
import SallerDeshBoard from "../DeshBoard/SallerDeshBoard";

import DeshboadLayout from "../layout/DeshboadLayout";
import Category from "../Pages/Home/Categories/Category";
import Login from "../Pages/Signin/Login/Login";
import Register from "../Pages/Signin/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blog from "../Blog/Blog";

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
                loader:({params})=> fetch(`https://used-products-resale-server-bijontalukder.vercel.app/category/${params.id}`)
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

    },
    {
        
        path:'/dashboard',
        element:<PrivateRoute><DeshboadLayout></DeshboadLayout></PrivateRoute>,
        children:[
            {
              path:'/dashboard',
              element:<DeshBoard></DeshBoard>
            },
            // // {
            // //     path:'/admindeshboard',
            // //     element:<AdminDeshBoard></AdminDeshBoard>
            // //  },
            //  {
            //     path:'/sallerdeshboard',
            //     element:<SallerDeshBoard></SallerDeshBoard>
            //   }

        ]
    },
    {
        path:'/admindeshboard',
        element:<PrivateRoute><AdminDeshBoard></AdminDeshBoard></PrivateRoute>,
        children:[
            // {
            //   path:'/dashboard',
            //   element:<DeshBoard></DeshBoard>
            // },
            {
                path:'/admindeshboard',
                element:<AdminDeshBoard></AdminDeshBoard>
             }
            //  {
            //     path:'/sallerdeshboard',
            //     element:<SallerDeshBoard></SallerDeshBoard>
            //   }

        ]

    },
    {
        path:'/sallerdeshboard',
        element:<PrivateRoute><SallerDeshBoard></SallerDeshBoard></PrivateRoute>,
        children:[
            // {
            //   path:'/dashboard',
            //   element:<DeshBoard></DeshBoard>
            // },
            // {
            //     path:'/admindeshboard',
            //     element:<AdminDeshBoard></AdminDeshBoard>
            //  }
             {
                path:'/sallerdeshboard',
                element:<SallerDeshBoard></SallerDeshBoard>
              }

        ]

    },
    {
        path:'/blog',
        element:<Blog></Blog>
    },
    {
        path:'*',
        element: <div>
            <h2 className="text-4xl text-red-700"> 404 not found</h2>
        </div>
    }
])