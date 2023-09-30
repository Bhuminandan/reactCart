import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../Redux/actions/cartActions'

const Card = ({productObj}) => {

    const dispatch = useDispatch()

    const handleCardClick = (e) => {
        let innerText = e.target.innerText;
        if (innerText.includes('Add')) {
          dispatch(addToCart(productObj))
        } else {
          dispatch(removeFromCart(productObj.id))
        }
    }

  return (
    <div key={productObj.id}
    className='w-64 h-96 flex flex-col items-center justify-between hover:scale-105 duration-300 transition-all cursor-pointer border-2 border-zinc-600 shadow-lg'>
    <div className="img">
      <img
        className=' w-64 h-56 object-cover' 
        src={productObj.thumbnail} 
        alt="product img" />
    </div>
      <div className="title self-start pl-3 text-lg font-medium">{productObj.title}</div>
      <div className="price self-start pl-3 text-lg font-medium">${productObj.price}</div>
      <button 
      onClick={handleCardClick}
      className='w-full bg-black text-white py-2 hover:bg-stone-900 active:transform active:translate-y-1 duration-150'>
        {
          productObj.cart !== true ? <>Add to cart →</> : <>Remove from cart →</>
        }
      </button>
  </div>
  )
}

export default Card