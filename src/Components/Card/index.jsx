const Card = ({ data }) => {
    return (
      <div className='bg-white cursor-pointer w-56 h-80 rounded-lg shadow-md flex flex-col'>
        <figure className='relative mb-2 w-full h-4/5 rounded-t-lg overflow-hidden'>
          <img className='w-full h-full object-cover transition-transform duration-300 hover:scale-105' src={data.image} alt={data.name} />
          <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 cursor-pointer'>+</div>
          <span className='absolute bottom-0 left-0 bg-white/70 rounded-b-lg text-black font-bold px-3 py-1'>{data.name}</span>
        </figure>
        <div className='px-3 py-2 flex flex-col justify-between h-1/5'>
          <p className='text-sm font-light mb-1 line-clamp-2'>{data.description}</p>
          <p className='text-xl font-semibold'>${data.price}</p>
        </div>
      </div>
    )
  }
  
  export default Card;