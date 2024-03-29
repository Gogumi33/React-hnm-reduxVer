import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  // json서버를 통한 db.json파일의 API 읽어오기.
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async() => {
    // 검색기능 구현.
    let searchQuery = query.get('q') || "";

    let url = `https://my-json-server.typicode.com/Gogumi33/React-h-m-shopping/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    
    setProductList(data);
  }

  // 리액트에서의 API 호출은 useEffect이다.
  // 이 useEffect는 배열에 값이 없다면 프로젝트 시작 후 딱 한번만 실행된다!!!!!(중요)
  useEffect(() => {
    getProducts()
  }, [query]) // 빈 배열 -> 주의...! 'query'적음으로써 유심히 봐 줘..
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
