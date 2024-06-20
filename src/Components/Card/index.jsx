import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { IconShoppingCartUp } from '@tabler/icons-react';


const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.setProductToShow(data)
    context.openProductDetail()
  }

    return (
      <div className='bg-white cursor-pointer w-full sm:w-56 h-80 rounded-lg shadow-md shadow-red-200 flex flex-col hover:bg-gray-100 transition-transform duration-300 hover:scale-105'
        onClick={() => showProduct(data)}
        title="Ver detalle del producto">
        <figure className='relative mb-2 w-full h-4/5 rounded-t-lg overflow-hidden'>
          <img className='w-full h-full object-cover transition-transform duration-300 hover:scale-105' src={data.image} alt={data.name} />
      <div 
         className='absolute top-0 right-0 flex justify-center items-center bg-gray-100 w-6 h-6 rounded-full m-2 cursor-pointer hover:bg-gray-300 transition-transform duration-300 hover:scale-105'
         onClick={(e) => {
         e.stopPropagation();
        context.setCount(context.count + 1);
        }}
        title="Agregar al carrito">
        <IconShoppingCartUp size={20} stroke={2} color={"#f00505"} />
      </div>
          <span className='absolute bottom-0 left-0 bg-white/70 rounded-b-lg text-black font-bold px-3 py-1'>{data.name}</span>
        </figure>
        <div className='px-3 py-2 flex flex-col justify-between h-1/5'>
          <p className='text-xl font-semibold'>${data.price}</p>
        </div>
      </div>
    )
  }
  
  export default Card;