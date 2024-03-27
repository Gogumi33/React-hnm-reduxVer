import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

const ProductAll = () => {
  // json서버를 통한 db.json파일의 API 읽어오기.
  const [productList, setProductList] = useState([]);
  const getProducts = async() => {
    let url = `http://localhost:5000/products`
    let response = await fetch(url);
    let data = await response.json();
    
    setProductList(data);
  }

  // 리액트에서의 API 호출은 useEffect이다.
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div>
      <ProductCard />
    </div>
  )
}

export default ProductAll
