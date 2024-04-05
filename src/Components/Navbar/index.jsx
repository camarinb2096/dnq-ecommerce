import { NavLink } from "react-router-dom"

const Navbar = () => {

    const activeStyle = 'underline text-red-500'

    return (
        <nav className='flex justify-between items-center w-full h-24 py-5 px-32 fixed z-10 top-0 font-bold bg-gray-200 rounded-sm'>
            <ul className='flex justify-between w-auto font-bold text-xl gap-24'>
               <li>
                    <NavLink 
                    to='/' 
                    className={({ isActive }) => isActive ? activeStyle : undefined} >
                        <img src='../../public/dnq-motor-logo.png' alt='Logo' className="w-40"/>  
                    </NavLink>
                </li>
            </ul>
            <div className='flex justify-center'>
              <ul className='flex flex-row font-bold text-xl'>
                <li>
                    <div className="flex items-center bg-white rounded-2xl overflow-hidden shadow-md">
                        <input className="text-base text-black flex-grow outline-none rounded-l-2xl px-4 py-2 w-full" type="text" placeholder="Encuentra tu repuesto" />
                        <button className="bg-red-500 text-white text-base rounded-r-2xl px-6 py-2 font-bold hover:bg-red-600 transition-colors">Buscar</button>
                    </div>    
               </li> 
              </ul>
            </div>
            <ul className='flex justify-between w-auto font-bold text-xl gap-4'>
                <li>
                <NavLink 
                    to='/login'
                    className={({ isActive }) => isActive ? activeStyle : undefined} >
                        Ingresar
                    </NavLink>
                    
                </li>
                <NavLink 
                    to='/register'
                    className={({ isActive }) => isActive ? activeStyle : undefined} >
                        Registrarse
                    </NavLink>
                <li>
                    Mi carrito 🛒 
                </li>
            </ul>
        </nav>
        )
}

export default Navbar
