import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import ProductList from './components/ProductList/ProductList.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <><Navbar></Navbar><br /><h1>About Page</h1></>
  },
  {
    path: '/contact',
    element: <><Navbar></Navbar><br /><h1>Contact Page</h1></>
  },
  {
    path: '/products',
    element: <><Navbar></Navbar><ProductList></ProductList></>
  },
  {
    path: 'services',
    element: <><Navbar></Navbar><br /><h1>Services Page</h1></>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
