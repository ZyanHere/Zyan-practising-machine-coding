import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({imageUrl, title, desc, buttonText}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
        <img className="w-full" src={imageUrl} alt={title}/>
      <div className=' px-6 py-4'>
        <div className='font-bold text-2xl mb-2'>
            {title}
        </div>
        <p className='text-gray-700 '>{desc}</p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded'> {buttonText} </button>
      </div>
    </div>
  )
}

export default Card
