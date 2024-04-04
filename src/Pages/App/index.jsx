import{ BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '*', element: <NotFound /> },
  ])
  return routes
} 

const App = () => {

  return (
    <div className="App">
      <BrowserRouter> 
        <AppRoutes />
        <Navbar />
      </BrowserRouter>  
    </div>
  )
}

export default App
