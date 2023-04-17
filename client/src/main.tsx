import React from 'react'
import ReactDOM from 'react-dom/client'
import App from  './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Initialpage from './routes/pages/Initial-page'
import Login from './routes/pages/Login'
import Desejos from './routes/pages/Desejos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: 'Initialpage',
    element: <Initialpage/>
  },

  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'lista-de-desejos',
    element: <Desejos/>
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
