import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menuList = [
      '여성', 
      'Divided',
      '남성',
      '신생아/유아',
      '아동',
      'H&M Home',
      'Sale',
      '지속가능성',
    ];
    const navigate = useNavigate();

    const goToLogin = () => {
      navigate("/login")
    }
    const search = (event) => {
      if(event.key === "Enter") {
        let keyword = event.target.value;
        navigate(`/?q=${keyword}`);
      }
    };
  return <div>
    <div>
        <div class="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
    </div>
    <div className="nav-section">
      <img 
        className='logo'
        width={100}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdkl-tdfUNIFDfpFnTaM_EfRy1aJheyur4A&s" 
        onClick={() => navigate("/")}/>
    </div>
    <div className='menu-area'>
      
      <ul className="menu-list">
        {menuList.map((menu) => (
          <li onClick={() => navigate("/")}>{menu}</li>
        ))}
      </ul>
      
      <div className='search-input-container'>
          <FontAwesomeIcon icon={faSearch} />
          <input className='search-input' type="text" onKeyDown={(event) => search(event)}/>
      </div>
    </div>
  </div>
}

export default Navbar
