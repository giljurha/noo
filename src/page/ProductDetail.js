import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

const ProductDetail = () => {
  let { id } = useParams();
  const[product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/giljurha/noo/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail()
  }, [])
  const [selectedSize, setSelectedSize] = useState('');
  const handleSelectSize = (size) => {
    setSelectedSize(size); // 선택된 사이즈를 상태에 저장
    console.log(`선택된 사이즈: ${size}`);
  };
  return (
  <Container>
    <Row>
      <Col className="product-img">
        <img src={product?.img}/>
      </Col>
      <Col className='mt-3'>
        <div className="mb-4 fs-1">{product?.title}</div>
        <div className="mb-4 fs-2">{new Intl.NumberFormat().format(product?.price)}원</div>
        <div>
        <Dropdown className="mb-4 w-50">
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
          {selectedSize || '사이즈 선택'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {product?.size?.map((size, index) => (
            <Dropdown.Item key={index} onClick={() => handleSelectSize(size)}>
              {size}
            </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Button variant="dark"className="mb-4">
          구매하기
        </Button>
      </div>
      </Col>
    </Row>
  </Container>
  )
}

export default ProductDetail