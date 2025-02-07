import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Users/Login.jsx'
import Home from './components/Dashboard/Home.jsx'
import SignUp from './components/Users/SignUp.jsx'
import ProductDetail from './components/Dashboard/ProductDetail.jsx'


const routerProvider = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/Home",
    element: <Home />
  },

  {
    path: "/SignUp",
    element: <SignUp />
  },

  {
      path: "/product-details/:id",
      element: <ProductDetail />
  }

 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerProvider} />
  </StrictMode>,
)
