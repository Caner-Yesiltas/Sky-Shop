import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext();

export const useProductContext = () => {
    return useContext(ProductContext)
}


const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]); // If set to a string or null, accessing array methods like map() would cause an error.
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
  
    const getData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/search?q=${search}`,
        );
        //  console.log(data.products);
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getData();
    }, [search]);

  return (
    <ProductContext.Provider value={{products, loading, search, setSearch}} >
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
