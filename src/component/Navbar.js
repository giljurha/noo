import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
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
    const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleMenuClick = (menuName) => {
    navigate("/");
    setMenuOpen(false); // 모바일에서 메뉴 클릭 후 닫기
  };

  return (
    <div style={{ position: "relative" }}>
    <BsNavbar expand="lg" className="navbar" sticky="top" expanded={menuOpen} onToggle={toggleMenu}>
      <Container style={{ position: "relative", display: "flex", flexDirection: "column" }}>
        <div className="navbar-container">
          {/* 좌측: 메뉴 토글 */}
          <div className="navbar-left">
            <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          {/* 중앙: 로고 (PC) 또는 홈 아이콘 (모바일) */}
          <div className="navbar-center">
            <img
              className="navbar-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdkl-tdfUNIFDfpFnTaM_EfRy1aJheyur4A&s"
              alt="Logo"
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
            />
            <div
              className="navbar-home-icon"
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              role="button"
              tabIndex={0}
            >
              <FontAwesomeIcon icon={faHome} />
            </div>
          </div>

          {/* 우측 상단: 검색 + 로그인 */}
          <div className="navbar-right">
            <div className={`search-input-container ${searchOpen ? 'search-open' : ''}`}>
              <FontAwesomeIcon
                icon={faSearch}
                onClick={toggleSearch}
                className="search-icon"
                role="button"
                tabIndex={0}
              />
              {searchOpen && (
                <input
                  className="search-input"
                  type="text"
                  onKeyDown={search}
                  placeholder="검색"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                />
              )}
            </div>

            <div className="login-button" onClick={goToLogin} role="button" tabIndex={0}>
              <FontAwesomeIcon icon={faUser} />
              <span>{authenticate ? "로그아웃" : "로그인"}</span>
            </div>
          </div>
        </div>

        {/* 메뉴 */}
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto menu-list">
            {menuList.map((menu) => (
              <Nav.Link
                key={menu}
                onClick={() => handleMenuClick(menu)}
                style={{ whiteSpace: "nowrap" }}
              >
                {menu}
              </Nav.Link>
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>

    </BsNavbar>

    </div>
  )
}

export default Navbar
