import { createContext, useState } from "react"
import { set } from "react-hook-form";

export const ShoppingCartContext = createContext() 

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0); 
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{ 
            count, 
            setCount, 
            openProductDetail, 
            closeProductDetail, 
            isProductDetailOpen, 
            productToShow, 
            setProductToShow}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}