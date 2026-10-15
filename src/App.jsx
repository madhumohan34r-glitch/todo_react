import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import './Style.css'
import Navbar from './pages/Navbar'
import Movielist from './pages/movies/Movielist'
import Layout from './pages/movies/Layout'
import Home from './pages/Home'
import Contextapi from './context/Contextapi'
import Moviecard from './components/Moviecard'
import Descrpiton from './components/Descrpiton'

function App() {
  let routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/Home',
          element: <Home />,
        },

      ]
    },
    {
      path: '/login',
      element: <Login />
    }, {
      path: '/register',
      element: <Register />
    },
    {
      path: '/movielist',
      element: <Movielist />
    },
    {
      path: '/Moviecard/:id',
      element: <Descrpiton />
    }
  ])
  return (

    <RouterProvider router={routers} />
  )
}

export default App
