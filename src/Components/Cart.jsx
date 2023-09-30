import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card.jsx'
import { clearCart } from '../Redux/actions/cartActions.js'

const Cart = () => {

  let cartArr = useSelector(state => state)
  const dispatch = useDispatch();
  
  const subTotal = cartArr.reduce((acc, curr) => {
    return  acc + curr.price
  }, 0)

  const handleCheckOut = () => {
    dispatch(clearCart())
  }

  return (
    <>
    <h1 className='md:text-4xl sm:text-2xl text-xl text-center mt-10 font-bold'>My Cart</h1>
    <div className='w-full flex items-center md:items-start md:justify-between justify-center flex-wrap gap-2  md:px-20 sm:px-10  mt-10'>  
    <div className="left w-3/5">
      <div className='flex items-center justify-center md:items-start md:justify-start gap-10 flex-wrap'>
      {
        cartArr.map((productObj) => {
          return (
            <Card
            key={productObj.id}
            productObj={productObj}
            />
          )
        })
      }
    </div>
    </div>
    <div className="right bg-zinc-950 w-96 h-auto p-10 text-white text-center">
      <p className=' pb-10 text-xl'>Checkout List</p>
      <ul className='flex flex-col gap-5 items-center justify-center w-full'>
          {
            cartArr.map((productObj) => {
              return (
                <li key={productObj.id} className='flex items-center justify-between w-full'>
                  <div className="title">{productObj.title}</div>
                  <div className="price">${productObj.price}</div>
                </li>
              )
            })
          }
      </ul>
      <div className='w-full h-1 bg-white mt-10 mb-5'></div>
      <p className='self-start text-left text-xl font-bold flex items-center justify-between'><span>Total</span> <span>${subTotal}</span></p>
      <div className='w-full h-1 bg-white mt-5 mb-5'></div>
      <button 
      onClick={handleCheckOut}
      className='w-full py-2 text-center bg-white text-black font-medium active:scale-95 duration-300 transition-all'>Click to Checkout</button>
    </div>
    </div>
    </>
    
  )
}

export default Cart