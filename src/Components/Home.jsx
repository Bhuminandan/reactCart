import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios';


const Home = () => {

  const [data, setData] = useState(null)

  useEffect(() => {

    const fetchData = async () => {
      let res = await axios.get('https://dummyjson.com/products')
      setData(res.data)
    }
    fetchData();

  }, [])

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