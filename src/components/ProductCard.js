import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div className="card" onClick={showDetail}>
      {/* https://lp2.hm.com/hmgoepprod?set=source[/61/f6/61f6c34bdb8e5970c8ed30e662ee126ea95c6376.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main] */}
      <img src={item?.img}/>
      <div>{item?.choice? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="new-product">{item?.new == true? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard
