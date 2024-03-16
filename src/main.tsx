import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from 'sonner'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './pages/ErrorPage.tsx'
import Home from './pages/Home.tsx'
import Countries from './pages/Countries.tsx'
import Stadiums from './pages/Stadiums.tsx'
import Sports from './pages/Sports.tsx'
import About from './pages/About.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'countries',
        element: <Countries />
      },
      {
        path: 'sports',
        element: <Sports /> 
      },
      {
        path: 'stadiums',
        element: <Stadiums /> 
      },
      {
        path: 'about',
        element: <About /> 
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster richColors/>
  </React.StrictMode>,
)
