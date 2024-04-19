import './styles.css';
import { IconX } from '@tabler/icons-react';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    console.log(context.productToShow)
  return (
    <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 bg-white border shadow-md shadow-red-200 rounded-l mt-24`} >
        <div className='flex justify-between items-center p-6'>
            <h2 className='text-2xl font-bold text-black'>Detalle del Producto</h2>
            <button className='text-black font-bold'
                onClick={context.closeProductDetail}>
                <IconX stroke={2}/>
            </button>
        </div>
        <figure className='flex justify-center px-6'>
            <img className='w-96 h-96 object-cover border shadow-md shadow-red-200 rounded-lg' src={context.productToShow.image} alt={context.productToShow.name} />
        </figure>
        <h2 className='text-4xl font-bold text-center py-6'>{context.productToShow.name}</h2>
    </aside>
  );
}

export default ProductDetail;