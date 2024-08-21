import './Navbar.css';
import Baye from '../../assets/Baye.png';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="container app__navbar">
      <div className='app__navbar-logo'>
        <img  src={Baye} alt="app logo"/>
        <span className='p__greatvibes navbar-slogan'>Every bite is a delight!!!</span>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__montserrat'>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>HOME</NavLink>
        </li>
        <li className='p__montserrat'>
          <NavLink to="/about-us" className={({ isActive }) => isActive ? "active-link" : ""}>ABOUT</NavLink>
        </li>
        <li className='p__montserrat'>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? "active-link" : ""}>GALLERY</NavLink>
        </li>
        <li className='p__montserrat'>
          <NavLink to="/menu" className={({ isActive }) => isActive ? "active-link" : ""}>MENU</NavLink>
        </li>
        <li className='p__montserrat'>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>CONTACT</NavLink>
        </li>
      </ul>
      <button className="custom__button app__navbar-btn">
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>DELIVERY / PICK UP</NavLink>
      </button>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} style={{ cursor: 'pointer' }} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className='p__montserrat'>
                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>HOME</NavLink>
              </li>
              <li className='p__montserrat'>
                <NavLink to="/about-us" className={({ isActive }) => isActive ? "active-link" : ""}>ABOUT</NavLink>
              </li>
              <li className='p__montserrat'>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? "active-link" : ""}>GALLERY</NavLink>
              </li>
              <li className='p__montserrat'>
                <NavLink to="/menu" className={({ isActive }) => isActive ? "active-link" : ""}>MENU</NavLink>
              </li>
              <li className='p__montserrat'>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>CONTACT</NavLink>
              </li>
            </ul>
            <button className="custom__button app__navbar-smallscreen-btn">
              <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>DELIVERY / PICK UP</NavLink>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
