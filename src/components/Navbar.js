import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const menuList = ['여성', '남성', '유아', '아동', '세일', '지속가능성',];
  return (
    <div>
      <div className="first-box">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input class="input-box" type="text" />
        </div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div class="login-text">로그인</div>
        </div>
      </div>

      <div>
        <div className="nav-section">
          <img width={100}
               src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          />
        </div>
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
