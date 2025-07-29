import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './styles/global.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Homepage from './pages/Homepage/Homepage';
import Userroot from './root/Userroot';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Userroot/>,
    children: [
      {
        path: '',
        element:<Homepage/>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
