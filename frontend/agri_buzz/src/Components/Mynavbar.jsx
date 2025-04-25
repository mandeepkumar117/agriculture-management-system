import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Mynavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>   
    <div className="search-form">
          <center>
          <form>
            <input
              type="text"
              placeholder="Search...."
              className="search-input"
            />
          </form>
          </center>
        </div> 
    <nav className="navbar">
      <h1 className="logo">Logo</h1>

      <ul className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
        <li className="dropdown">
          <div onClick={() => toggleDropdown('home')}><NavLink>Home</NavLink></div>
          <ul className={`dropdown-menu ${openDropdown === 'home' ? 'show' : ''}`}>
            <li><NavLink onClick={closeMenu}>Overview</NavLink></li>
            <li><NavLink onClick={closeMenu}>Updates</NavLink></li>
          </ul>
        </li>
        <li className="dropdown">
          <div onClick={() => toggleDropdown('fertilizer')}><NavLink>Fertilizer</NavLink></div>
          <ul className={`dropdown-menu ${openDropdown === 'fertilizer' ? 'show' : ''}`}>
            <li><NavLink onClick={closeMenu}>Organic</NavLink></li>
            <li><NavLink onClick={closeMenu}>Chemical</NavLink></li>
          </ul>
        </li>
        <li className="dropdown">
          <div onClick={() => toggleDropdown('seeds')}><NavLink>Seeds</NavLink></div>
          <ul className={`dropdown-menu ${openDropdown === 'seeds' ? 'show' : ''}`}>
            <li><NavLink onClick={closeMenu}>Wheat</NavLink></li>
            <li><NavLink onClick={closeMenu}>Rice</NavLink></li>
            <li><NavLink onClick={closeMenu}>Vegetables</NavLink></li>
          </ul>
        </li>
        <li className="dropdown">
          <div onClick={() => toggleDropdown('labour')}><NavLink>Hiring</NavLink></div>
          <ul className={`dropdown-menu ${openDropdown === 'labour' ? 'show' : ''}`}>
            <li><NavLink onClick={closeMenu}>Labour</NavLink></li>
            <li><NavLink onClick={closeMenu}>Machine</NavLink></li>
          </ul>
        </li>
        <li className="dropdown">
          <div onClick={() => toggleDropdown('crops')}><NavLink>Crops</NavLink></div>
          <ul className={`dropdown-menu ${openDropdown === 'crops' ? 'show' : ''}`}>
            <li><NavLink onClick={closeMenu}>Type 1</NavLink></li>
            <li><NavLink onClick={closeMenu}>Type 2</NavLink></li>
            <li><NavLink onClick={closeMenu}>Type 3</NavLink></li>
            <li><NavLink onClick={closeMenu}>Type 4</NavLink></li>
            <li><NavLink onClick={closeMenu}>Type 5</NavLink></li>
            <li><NavLink onClick={closeMenu}>Type 6</NavLink></li>
          </ul>
        </li>
        <li className="dropdown">
          <div onClick={() => toggleDropdown('pesticides')}><NavLink>Pesticides</NavLink></div>
          <ul className={`dropdown-menu ${openDropdown === 'pesticides' ? 'show' : ''}`}>
            <li><NavLink onClick={closeMenu}>Sprays</NavLink></li>
            <li><NavLink onClick={closeMenu}>Powders</NavLink></li>
          </ul>
        </li>
      </ul>

      <div className="icons-wrapper">
        <div className="cart-icon">🛒</div>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleHamburger}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Mynavbar;
