import { NavLink } from "react-router-dom"
import { IconShoppingCart } from '@tabler/icons-react'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {

    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline text-red-500'
    const location = useLocation()
 

    return (
        <nav className='flex justify-between items-center w-full h-24 py-5 px-48 fixed z-10 top-0 font-bold bg-gray-600 rounded-sm'>
            <ul className='flex justify-between w-auto font-bold text-xl gap-24'>
               <li>
                    <NavLink to='/' >
                        <img src='dnq-motor-logo.png' alt='Logo' className="w-40"/>  
                    </NavLink>
                </li>
            </ul>
            {location.pathname === '/' && (             
            <div className='flex justify-center w-1/2'>
              <ul className='flex flex-row font-bold text-xl'>
                <li>
                    <div className="flex justify-between gap-2 items-center bg-white rounded-2xl overflow-hidden shadow-md">
                        <input className="text-base text-black flex-grow outline-none rounded-l-2xl px-4 py-2 w-full" type="text" placeholder="Encuentra tu repuesto" />
                        <button className="bg-red-500 text-white text-base rounded-r-2xl px-6 py-2 font-bold hover:bg-red-600 transition-colors">Buscar</button>
                    </div>    
               </li> 
              </ul>
            </div>)}
            <ul className='flex justify-between w-auto font-bold text-xl gap-4'>
                <li>
                    <NavLink to='/login'>
                        Ingresar
                    </NavLink>                 
                </li>
                    <NavLink to='/register' >
                        Registrarse 
                    </NavLink>
                <li>
                    <div className='flex justify-between gap-1 text-red-500'>
                        <IconShoppingCart color='red' /> {context.count}
                    </div>
                </li>
            </ul>
        </nav>
        )
}

export default Navbar