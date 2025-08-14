import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Nav.css";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);

  // const location = useLocation();
  // const home = ["/", "/about", "/blog"].includes(location.pathame);

  const toggle = () => setIsMenu(!isMenu);

  const closeMenu = () => setIsMenu(false);

  return (
    <header className="NavBar">
      <nav>
        <div className="logo" onClick={closeMenu}>
          <Link to="./">Saastool</Link>
        </div>

        <ul className={isMenu ? "nav-col" : ""}>
          <li onClick={closeMenu}>
            <NavLink to="./blog">Blogs</NavLink>
          </li>

          <li onClick={closeMenu}>
            <ScrollLink to="price-plan" smooth={true} duration={200} spy={true}>
              Pricing
            </ScrollLink>
          </li>

          <li onClick={closeMenu}>
            <ScrollLink to="services" smooth={true} duration={200} spy={true}>
              Services
            </ScrollLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="./about">About Us</NavLink>
          </li>

          <li onClick={closeMenu}>
            <NavLink to="./contact">Contact Us</NavLink>
          </li>
        </ul>

        <div className="logins-details">
          <button className="signin">
            {" "}
            <NavLink to="./auth">Sign In</NavLink>
          </button>
          <button className="signup">
            <NavLink to="./auth">Get started</NavLink>
          </button>
        </div>

        <div className="toggle-btns" onClick={toggle}>
          {isMenu ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
