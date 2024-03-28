import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  // json서버를 통한 db.json파일의 API 읽어오기.
  const [productList, setProductList] = useState([]);
  const getProducts = async() => {
    let url = `https://my-json-server.typicode.com/Gogumi33/React-h-m-shopping/products`
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
      {/* bootstrap container - 적당한 중앙에 배치하기 위함 (컨테이너 최대사이즈:12) */}
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}><ProductCard item={menu} /></Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
