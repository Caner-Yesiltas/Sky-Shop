import Axios  from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]); // If set to a string or null, accessing array methods like map() would cause an error.
  const [search, setSearch] = useState("")

  const getData = async () => {
    try {
      const {data} = await Axios.get(`https://dummyjson.com/products/search?q=${search}`)
      // console.log(res.data.products);
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  }


    useEffect(() => {
      
    getData()
 
    }, [])
    

  return <div className='mx-auto max' >


  </div>;
};

export default Products;
