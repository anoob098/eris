import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiSun, FiMoon, FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer scrolled={isScrolled}>
      <div className="container">
        <NavbarContent>
          <Logo to="/">
            <span>ERIS</span>
          </Logo>

          <NavLinks isVisible={isMenuOpen}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products/earphones">Earphones</NavLink>
            <NavLink to="/products/headphones">Headphones</NavLink>
            <NavLink to="/products/speakers">Speakers</NavLink>
            <NavLink to="/products/watches">Watches</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </NavLinks>

          <NavActions>
            <NavActionButton>
              <FiSearch />
            </NavActionButton>
            <NavActionButton>
              <FiUser />
            </NavActionButton>
            <NavActionButton>
              <FiShoppingCart />
            </NavActionButton>
            <ThemeToggle onClick={toggleTheme}>
              {theme === 'light' ? <FiMoon /> : <FiSun />}
            </ThemeToggle>
            <MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </MenuToggle>
          </NavActions>
        </NavbarContent>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ theme }) => theme.navbarBg}; 
  
  padding: ${({ scrolled }) => (scrolled ? '10px 0' : '20px 0')};
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
  span {
    background: linear-gradient(to right, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: ${({ theme }) => theme.card};
    flex-direction: column;
    padding: 80px 20px;
    transform: ${({ isVisible }) => isVisible ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    z-index: 999;
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const NavLink = styled(Link)`
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const NavActionButton = styled.button`
  background: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 992px) {
    display: block;
  }
`;

export default Navbar;