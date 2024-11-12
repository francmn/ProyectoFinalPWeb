import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Settings from './pages/Settings.jsx'
import Stories from './pages/Stories.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter(
  [{
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/home",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/my-projects",
    element: <Projects/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/my-stories",
    element: <Stories/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/settings",
    element: <Settings/>,
    errorElement: <ErrorPage/>
  }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}>
      <App/>
    </RouterProvider>  
  </React.StrictMode>
)
