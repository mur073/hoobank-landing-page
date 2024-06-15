import './navbar.css';
import { navbarLinks } from '../../constants/index';
import { logo } from '../../assets/index';
import { useState } from 'react';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('home');

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navbar__logo" />

      <ul className="navbar__links">
        <LinkItems active={active} setActive={setActive} />
      </ul>

      <div className="navbar__menu-toggle">
        {toggle ? (
          <RiCloseLine size={30} color="fff" onClick={() => setToggle(false)} />
        ) : (
          <RiMenu3Line size={30} color="#fff" onClick={() => setToggle(true)} />
        )}
      </div>

      {toggle && (
        <div className="navbar__menu slide-top bg-dark-gradient">
          <LinkItems active={active} setActive={setActive} />
        </div>
      )}
    </nav>
  );
};

const LinkItems = ({ active, setActive }) => {
  return navbarLinks.map((link) => (
    <a
      key={`menu-${link.dest}`}
      href={`#${link.dest}`}
      className={`navbar__item ${active === link.dest ? 'navbar__item_active' : ''}`}
      onClick={() => setActive(link.dest)}
    >
      {link.text}
    </a>
  ));
};

export default Navbar;
