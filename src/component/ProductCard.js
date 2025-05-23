import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail= () => {
    navigate(`/product/${item.id}`)
  }
  return (
  <div className="card" onClick={showDetail}>
        <img src={item?.img}/>
        <div>Conscious choice</div>
        <div>{item?.title}</div>
        <div>{new Intl.NumberFormat().format(item?.price)}원</div>
        <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
    );
}

export default ProductCard