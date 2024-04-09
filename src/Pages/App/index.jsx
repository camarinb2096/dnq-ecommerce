import{ BrowserRouter, useRoutes } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import LoginForm from '../Login'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'

import './App.css'
import RegisterForm from '../Register'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <LoginForm /> },
    { path: '/register', element: <RegisterForm /> },
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
