const Card = () => {
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5 rounde-lg'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black font-bold m-2 px-3 py-0.5'>Titulo del repuesto</span>
                <img className='w-full h-full object-cover rounded-lg'src='https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='repuesto' />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'>+</div>
            </figure>
            <p className='flex justify-between'> 
                <span className='text-l font-light'>Descripción corta</span>
                <span className='text-xl font-medium'>$1000</span>
            </p>
        </div>
    )
}

export default Card