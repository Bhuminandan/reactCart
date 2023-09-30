import React, { useEffect, useState } from 'react'
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { failuresData, loadingData, successData } from '../Redux/actions/fetchDataActions';
import axios from 'axios';

const Home = () => {

  const dispatch = useDispatch()
  const {data, loading, error} = useSelector(state => state.fetchReducer)

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(loadingData())
        const res = await axios.get('https://dummyjson.com/products')
        const data = await res.data;
        dispatch(successData(data))
      } catch (error) {
        dispatch(failuresData(error.message))
      }
    }
    fetchData()
  }, [dispatch])

  return (
    <>
    <h1 className='md:text-4xl sm:text-2xl text-xl text-center mt-10 font-bold'>All Items</h1>
    <div className='flex items-center justify-center md:items-start md:justify-between gap-10 flex-wrap md:px-20 sm:px-10 mt-10'>
      {
        data &&
        data.products.map((productObj) => (
          <Card
          key={productObj.id}
          productObj={productObj}
          />
        ))
      }
     
    </div>
    
    </>
    
  )
}

export default Home;