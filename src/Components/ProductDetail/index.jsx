import './styles.css';
import { IconX } from '@tabler/icons-react';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    const [hasBeenOpened, setHasBeenOpened] = useState(false)

    useEffect(() => {
        if (context.isProductDetailOpen) {
            setHasBeenOpened(true)
        }
    }, [context.isProductDetailOpen])

    
    console.log(context.productToShow)
    console.log(context.isProductDetailOpen)
  return (
    <aside 
    className={`${context.isProductDetailOpen ? 'flex slide-in' : hasBeenOpened ? 'flex slide-out' : 'hidden'} product-detail flex-col fixed right-0 bg-white border shadow-md shadow-red-200 mt-24`} >
        <div className='flex justify-between items-center p-6'>
            <h2 className='text-2xl font-bold text-black'>Detalle del Producto</h2>
            <button className='text-black font-bold'
                onClick={context.closeProductDetail}>
                <IconX stroke={2}/>
            </button>
        </div>
        <figure className='flex justify-center px-6'>
            <img className='w-96 h-96 object-cover shadow-md shadow-red-200 rounded-lg' src={context.productToShow.image} alt={context.productToShow.name} />
        </figure>
        <h2 className='text-4xl font-bold text-center py-6'>{context.productToShow.name}</h2>
        <p className='text-xl text-left pl-5'>{context.productToShow.description}</p>
        <p className='text-2xl font-semibold text-right pr-6 py-6'>${context.productToShow.price}</p>
    </aside>
  );
}

export default ProductDetail;