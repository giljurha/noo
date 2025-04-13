import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";


const Navbar = ({ authenticate, setAuthenticate }) => {
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
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return <div>
    <div>
    <div>
        <div class="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
    </div>
    <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    <div className="nav-section">
      <img 
        className='logo'
        width={100}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdkl-tdfUNIFDfpFnTaM_EfRy1aJheyur4A&s" 
        onClick={() => navigate("/")}/>
    </div>
    </div>
    <Container>
    
    <div className='menu-area'>
    
      <ul className={`menu-list ${menuOpen ? "open" : ""}`}>
        {menuList.map((menu) => (
          <li onClick={() => navigate("/")}>{menu}</li>
        ))}
      </ul>
      
      <div className='search-input-container'>
          <FontAwesomeIcon icon={faSearch} />
          <input className='search-input' type="text" onKeyDown={(event) => search(event)}/>
      </div>
    </div>
    </Container>
    
  </div>
}

export default Navbar
