import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layoutes/MainLayouts";
import Home from "../pages/Home/Home";
import React from 'react';



export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children:[
        {
        path:'/',
        element: <Home></Home>
        }
      ]
    }
  ])