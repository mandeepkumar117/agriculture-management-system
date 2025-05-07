import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../style.css';

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
            <div onClick={() => toggleDropdown('home')}>
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            </div>
            <ul className={`dropdown-menu ${openDropdown === 'home' ? 'show' : ''}`}>
              <li><NavLink to="/overview" onClick={closeMenu}>Overview</NavLink></li>
              <li><NavLink to="/updates" onClick={closeMenu}>Updates</NavLink></li>
            </ul>
          </li>

          <li className="dropdown">
            <div onClick={() => toggleDropdown('fertilizer')}>
              <NavLink to="/fertilizer" onClick={closeMenu}>Fertilizer</NavLink>
            </div>
            <ul className={`dropdown-menu ${openDropdown === 'fertilizer' ? 'show' : ''}`}>
              <li><NavLink to="/fertilizer/organic" onClick={closeMenu}>Organic</NavLink></li>
              <li><NavLink to="/fertilizer/chemical" onClick={closeMenu}>Chemical</NavLink></li>
            </ul>
          </li>

          <li className="dropdown">
            <div onClick={() => toggleDropdown('seeds')}>
              <NavLink to="/seeds" onClick={closeMenu}>Seeds</NavLink>
            </div>
            <ul className={`dropdown-menu ${openDropdown === 'seeds' ? 'show' : ''}`}>
              <li><NavLink to="/seeds/wheat" onClick={closeMenu}>Wheat</NavLink></li>
              <li><NavLink to="/seeds/rice" onClick={closeMenu}>Rice</NavLink></li>
              <li><NavLink to="/seeds/vegetables" onClick={closeMenu}>Vegetables</NavLink></li>
            </ul>
          </li>

          <li className="dropdown">
            <div onClick={() => toggleDropdown('hiring')}>
              <NavLink to="/hiring" onClick={closeMenu}>Hiring</NavLink>
            </div>
            <ul className={`dropdown-menu ${openDropdown === 'hiring' ? 'show' : ''}`}>
              <li><NavLink to="/hiring/labour" onClick={closeMenu}>Labour</NavLink></li>
              <li><NavLink to="/hiring/machine" onClick={closeMenu}>Machine</NavLink></li>
            </ul>
          </li>

          <li className="dropdown">
            <div onClick={() => toggleDropdown('crops')}>
              <NavLink to="/crops" onClick={closeMenu}>Crops</NavLink>
            </div>
            <ul className={`dropdown-menu ${openDropdown === 'crops' ? 'show' : ''}`}>
              <li><NavLink to="/crops/type1" onClick={closeMenu}>Type 1</NavLink></li>
              <li><NavLink to="/crops/type2" onClick={closeMenu}>Type 2</NavLink></li>
              <li><NavLink to="/crops/type3" onClick={closeMenu}>Type 3</NavLink></li>
              <li><NavLink to="/crops/type4" onClick={closeMenu}>Type 4</NavLink></li>
              <li><NavLink to="/crops/type5" onClick={closeMenu}>Type 5</NavLink></li>
              <li><NavLink to="/crops/type6" onClick={closeMenu}>Type 6</NavLink></li>
            </ul>
          </li>

          <li className="dropdown">
            <div onClick={() => toggleDropdown('pesticides')}>
              <NavLink to="/pesticides" onClick={closeMenu}>Pesticides</NavLink>
            </div>
            <ul className={`dropdown-menu ${openDropdown === 'pesticides' ? 'show' : ''}`}>
              <li><NavLink to="/pesticides/sprays" onClick={closeMenu}>Sprays</NavLink></li>
              <li><NavLink to="/pesticides/powders" onClick={closeMenu}>Powders</NavLink></li>
            </ul>
          </li>

          <li className="dropdown">
            <div onClick={() => toggleDropdown('agribusiness')}>
              <NavLink to="/agribusiness" onClick={closeMenu}>Agribusiness</NavLink>
            </div>
            <ul className={`dropdown-menu ${openDropdown === 'agribusiness' ? 'show' : ''}`}>
              <li><NavLink to="/agribusiness/sprays" onClick={closeMenu}>Sprays</NavLink></li>
              <li><NavLink to="/agribusiness/powders" onClick={closeMenu}>Powders</NavLink></li>
            </ul>
          </li>

          <li className="dropdown">
            <div onClick={() => toggleDropdown('irrigation')}>
              <NavLink to="/irrigation" onClick={closeMenu}>Irrigation</NavLink>
            </div>
            <ul className={`dropdown-menu ${openDropdown === 'irrigation' ? 'show' : ''}`}>
              <li><NavLink to="/irrigation/sprays" onClick={closeMenu}>Sprays</NavLink></li>
              <li><NavLink to="/irrigation/powders" onClick={closeMenu}>Powders</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="registration" onClick={closeMenu}>Registration</NavLink></li>
          <li><NavLink to="login" onClick={closeMenu}>Login</NavLink></li>
          <li><NavLink to="dashbord" onClick={closeMenu}>dashbord</NavLink></li>
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
