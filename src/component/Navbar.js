import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Container, Navbar as BsNavbar, Nav } from "react-bootstrap";

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
      if (authenticate) {
        setAuthenticate(!authenticate);
      navigate("/login")
      } else {
        navigate("/login")
      }
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
  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <span>{authenticate ? "로그아웃" : "로그인"}</span>
      </div>
    <BsNavbar expand="lg" className="navbar">
      <Container>
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdkl-tdfUNIFDfpFnTaM_EfRy1aJheyur4A&s"
          alt="Logo"
          onClick={() => navigate("/")}
        />
        <BsNavbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleMenu}
        >
        </BsNavbar.Toggle>
        
        <BsNavbar.Collapse id="basic-navbar-nav" in={menuOpen}>
          <Nav className="me-auto menu-list">
            {menuList.map((menu) => (
              <Nav.Link key={menu} onClick={() => navigate("/")}>
                {menu}
              </Nav.Link>
            ))}
          </Nav>
          <div className="search-input-container">
            <FontAwesomeIcon icon={faSearch} />
            <input
              className="search-input"
              type="text"
              onKeyDown={search}
              placeholder="검색"
            />
          </div>
          
        </BsNavbar.Collapse>
        
      </Container>
      
    </BsNavbar>
      
    </div>
  )
}

export default Navbar
