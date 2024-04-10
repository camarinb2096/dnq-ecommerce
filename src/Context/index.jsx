import { createContext, useState } from "react";

const ShoppingCartContext = createContext() 

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Asume que el carrito es un array vacío al inicio

    return (
        <ShoppingCartContext.Provider value={{ cart, setCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}