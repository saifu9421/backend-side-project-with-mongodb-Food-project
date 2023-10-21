import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './MainComponents/Root';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
    path:"/",
    element:<Home></Home>,
    loader:()=> fetch('http://localhost:5000/food'),
      },{
        path:"//addProduct",
        element:<AddProduct></AddProduct>,
      },{
        path:"/updateProduct/:id",
        element:<UpdateProduct></UpdateProduct>,
        loader:({params})=> fetch(`http://localhost:5000/food/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
