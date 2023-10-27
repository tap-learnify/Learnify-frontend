import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import MainPage from './pages/MainPage.jsx'
// import HomePage from './pages/HomePage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
// import BlogPage from './pages/BlogPage.jsx'
// import AboutUsPage from './pages/AboutUsPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import DashBoard from './pages/DashBoard.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "courses",
        element: <CoursesPage />
      },
      // {
      //   path: "Home",
      //   element: <HomePage />
      // },
      
      // {
      //   path: "Blog",
      //   element: <BlogPage />
      // },
      //  {
        
      //    path: "AboutUs",
      //    element: <AboutUsPage />
      // },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },
  {
    path: "/dashboard",
    element: <DashBoard />
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
