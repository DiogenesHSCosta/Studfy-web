import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "./Styles/Reset.css"
import './Styles/index.css'
import App from './App.jsx';

import Home from './pages/Home/Home.jsx';
import Sobre from './pages/Sobre/Sobre.jsx';
import NossoApp from './pages/NossoApp/NossoApp.jsx';
import Depoimentos from './pages/Depoimentos/Depoimentos.jsx'
import QuemSomos from './pages/QuemSomos/QuemSomos.jsx';
import Erro from './pages/Error/Erro.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement:<Erro/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/sobre",
        element:<Sobre/>
      },
      {
        path:"/app",
        element:<NossoApp/>
      },
      {
        path:"/depoimentos",
        element:<Depoimentos/>
      },
      {
        path:"/quem-somos",
        element: <QuemSomos/>
      }
    ],
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
