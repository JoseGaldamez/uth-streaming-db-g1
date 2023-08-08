import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LoginPage } from './pages/LoginPage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { CssBaseline } from '@mui/material';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css'
import { PublicPage } from './pages/PublicPage.jsx';
import { PeliculasSubPage } from './subpages/PeliculasSubPage.jsx';
import { HomeSubPage } from './subpages/HomeSubPage.jsx';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "/home",
        element: <HomeSubPage />,
      },
      {
        path: "/home/peliculas",
        element: <PeliculasSubPage />,
      },
      {
        path: "/home/series",
        element: <h1>Series</h1>,
      },
    ]
  },
  {
    path: "/",
    element: <PublicPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
