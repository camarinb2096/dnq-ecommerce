import { NavLink } from "react-router-dom"

const Navbar = () => {

    const activeStyle = 'underline text-red-500'

    return (
        <nav className='flex justify-between items-center w-auto h-24 py-5 px-32 font-bold bg-gray-200 rounded-sm'>
            <ul className='flex justify-between w-auto font-bold text-xl gap-24'>
               <li>
                    <NavLink 
                    to='/' 
                    className={({ isActive }) => isActive ? activeStyle : undefined} >
                        <img src='../../public/dnq-motor-logo.png' alt='Logo' className="w-40"/>  
                    </NavLink>
                </li>
                <li>
                    <div class="sm:flex items-center bg-white font-bold rounded-2xl overflow-hidden px-2 py-1 justify-between w-auto">
					    <input class="text-base text-black font-bold flex-grow outline-none px-2 w-96" type="text" placeholder="Encuentra tu repuesto" />
					      <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto">
						    <button class="bg-red-400 text-white text-base rounded-2xl px-4 py-2 font-bold">Buscar</button>
					      </div>
				    </div>    
                </li> 
            </ul>
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
