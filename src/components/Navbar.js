import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', '남성', '유아', '아동', '세일', '스포츠', '지속가능성',];
    let navigate = useNavigate();
    let [width, setWidth] = useState(0);

    const search = (event) => {
      if(event.key === "Enter"){
        // 리액트에서는 입력 검색어가 event안에 있다.
         let keyword = event.target.value;

         // 위 받아온 값으로 url 바꿔주기.
         navigate(`/?q=${keyword}`);
      }
    };

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times; {/* X버튼 */}
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>

      <div className="first-box">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} className="hamburger" onClick={() => setWidth(250)} />
        </div>
        <div className="search-box">
          {/* 검색하기 기능 구현 - onKeyPress */}
          <FontAwesomeIcon icon={faSearch} />
          <input class="input-box" type="text" onKeyPress={(event) => search(event)} />
        </div>
        
        {authenticate ? (
          <div className="login-button" onClick={() => setAuthenticate(false)}>
          <FontAwesomeIcon icon={faUser} className="user-icon"/>
          <div class="login-text">로그아웃</div>
          </div>
        ) : (
          <div className="login-button" onClick={() => navigate("/login")}>
          <FontAwesomeIcon icon={faUser} className="user-icon"/>
          <div class="login-text">로그인</div>
          </div>
        )}

      </div>

      <div>
        <div className="nav-section">
          <Link to="/">
            <img width={100}
                src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
            />
          </Link>
        </div>
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li className="menus">{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
