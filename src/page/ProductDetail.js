import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";

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
  return (
  <Container>
    <Row>
      <Col className="product-img">
        <img src={product?.img}/>
      </Col>
      <Col>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
        <div>
            <select>
              <option value="">-- 사이즈 선택 --</option>
              {product?.size?.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
      </Col>
    </Row>
  </Container>
  )
}

export default ProductDetail