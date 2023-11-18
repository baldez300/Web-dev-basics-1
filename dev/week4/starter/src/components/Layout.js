import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div id="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={menuOpen ? 'menu-open' : 'menu-closed'}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/tours">Tours</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </nav>

      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
};
 
 export default Layout;