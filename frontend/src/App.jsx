import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import MainPage from './Page/MainPage/MainPage'
import Leadership from './Page/Leadership/Leadership'
import Board from './Page/Board/Board'
import Service from './Page/Service/Service'
import Contact from './Page/Contact/Contact'
import About from './Page/About/About'

import AdminLogin from './Page/Admin/AdminLogin'
import AdminPosts from './Page/Admin/AdminPosts'
import AdminEditPost from "./Page/Admin/AdminEditPost";
import AdminCreatePost from "./Page/Admin/AdminCreatePost";
import AdminContacts from "./Page/Admin/AdminContacts";
import AdminNavbar from './Components/AdminNavbar/AdminNavbar'

import axios from "axios"

function AuthRedirectRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null)


  useEffect(() => {
    const verifyToken = async () => {

      try {
        const response = await axios.post("http://localhost:3000/api/auth/verify-token", {}, {
          withCredentials: true
        })
        setIsAuthenticated(true)
      } catch (error) {
        console.log("토큰 인증 실패:", error)
        setIsAuthenticated(false)
      }
    }
    verifyToken()
  }, [])

  if (isAuthenticated === null) {
    return null;
  }
  return isAuthenticated ? <Navigate to="/admin/posts" replace /> : <Outlet />
}


function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {

    const verifyToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/verify-token", {},
          { withCredentials: true }
        )

        setIsAuthenticated(response.data.isValid)
        setUser(response.data.user)
      } catch (error) {
        console.log("토큰 인증 실패:", error)
        setIsAuthenticated(false)
        setUser(null)
      }
    }
    verifyToken()

  }, [])

  if (isAuthenticated === null) {
    return null
  }

  return isAuthenticated ? (
    <Outlet context={{ user }} />
  ) : (
    <Navigate to="/admin" replace />
  )
}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <Outlet />

    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/leadership",
        element: <Leadership />
      },
      {
        path: "/board",
        element: <Board />
      },
      {
        path: "/our-services",
        element: <Service />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  },
  {
    path: "/admin",
    element: <AuthRedirectRoute />,
    children: [{ index: true, element: <AdminLogin /> }]
  },
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            path: "posts",
            element: <AdminPosts />
          },
          {
            path: "create-post",
            element: <AdminCreatePost />
          },
          {
            path: "edit-posts/:id",
            element: <AdminEditPost />
          },
          {
            path: "contacts",
            element: <AdminContacts />
          }
        ]
        ,
      }
    ]
  }

])
function App() {

  return <RouterProvider router={router} />
}

export default App
