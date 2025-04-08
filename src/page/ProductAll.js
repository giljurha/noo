import React, { useEffect } from 'react'
import { useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';


const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = 'http://localhost:500/products';
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return <div>
      <Container>
        <Row>
          <Col lg={3}><ProductCard /></Col>
          <Col lg={3}><ProductCard /></Col>
          <Col lg={3}><ProductCard /></Col>
          <Col lg={3}><ProductCard /></Col>
        </Row>    
      </Container>
      <ProductCard />
    </div>
}

export default ProductAll