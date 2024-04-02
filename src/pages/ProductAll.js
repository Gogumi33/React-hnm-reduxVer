import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  // json서버를 통한 db.json파일의 API 읽어오기.
  // const [productList, setProductList] = useState([]); // 이제 useState대신 useSelector로..
  const productList = useSelector((state)=>state.product.productList); // @@@ product안 써주면 에러
  const [query, setQuery] = useSearchParams();
  
  const dispatch = useDispatch();

  const getProducts = () => {
    // 검색기능 구현.
    let searchQuery = query.get('q') || "";
    
    dispatch(productAction.getProducts(searchQuery));
    // 이렇게 해주면 바로 reducer가는게 아니라 미들웨어 거치고 가게된다.

    // @@@ redux @@@
    // let url = `https://my-json-server.typicode.com/Gogumi33/React-h-m-shopping/products?q=${searchQuery}`;
    // let response = await fetch(url);
    // let data = await response.json();
    
    // setProductList(data);
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
