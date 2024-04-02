import React from 'react'
import ProductDetail from '../pages/ProductDetail'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// 로그인이 된 private한 상황에서만 보여주는 페이지.
const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate == true? <ProductDetail/> : <Navigate to="/login"/>; // 아닐 시 돌려보내기.
}

export default PrivateRoute;
