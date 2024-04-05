import{ BrowserRouter, useRoutes } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import LoginForm from '../Login'
import Register from '../Register'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <LoginForm /> },
    { path: '/register', element: <Register /> },
    { path: '*', element: <NotFound /> },
  ])
  return routes
} 

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter> 
        <AppRoutes />
        <Navbar />
      </BrowserRouter>  
    </ShoppingCartProvider>
  )
}

export default App
