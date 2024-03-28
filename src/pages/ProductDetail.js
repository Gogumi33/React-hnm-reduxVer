import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id} = useParams(); // parameter로 넘겨준 id값을 알 수 있음.
  const[product, setProduct] = useState(null); // 여기에 api로부터 받아온 data 저장해둘거야.

  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/Gogumi33/React-h-m-shopping/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img}/>
        </Col>
        <Col className="product-info">
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div className="new-product">{product?.new == true? "신제품" : ""}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
