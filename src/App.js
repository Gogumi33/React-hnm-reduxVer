// json 서버 오픈 - npx json-server --watch db.json --port 5000

// import logo from './logo.svg'
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Navbar from './components/Navbar';
import PrivateRoute from './routes/PrivateRoute';

// 프로젝트 시작 전 항상 스토리라인 먼저 적기.
// 1. 총 페이지는 3개 - 전체상품 / 로그인 창 / 상세상품 @
// 2. 전체상품 - 전체 상품들 한눈에 볼 수 있음. @

// 3. 로그인 - 로그인 버튼 누를 시 바로 로그인창 , 상품 눌러도 로그인X 시, 로그인창 뜨도록.
// 4. 상세상품 - 로그인O 시, 해당상품 상세정보 노출
// 5. 로그아웃 버튼 누를 시 로그아웃이 진행되며, 상품 디테일페이지 -> 로그인 페이지 명시
// 6. 오른쪽 상단 로그인 <-> 로그아웃 전환
// 7. 상품을 q= 을 통해 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true여야 로그인 됨.
  useEffect(() => {
    // console.log("로그인 됬어", authenticate); // authenticate값이 바뀔 때 마다 감지.
  }, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />

      {/* Restful Route에 따른 url규칙 */}
      {/* redux 이용 시 props 건내줄 필요 없어짐 */}
      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
