import {Link, Links, NavLink} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import '../styles/Nav.css';
import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';



const Nav = () => {

    const [isMenu, setIsMenu] = useState(false);

    const toggle =()=> setIsMenu(!isMenu);
    
    const closeMenu = () => setIsMenu(false);






    return (
        
        <header className="NavBar">

            <nav>

        
                <div className="logo">Saastool</div>
            

                <ul className= { isMenu? 'nav-col' : ''}>
                    <li onClick={closeMenu}> <NavLink>Blogs</NavLink> </li>
                    <li onClick={closeMenu}> <NavLink>Pricing</NavLink> </li>
                    <li onClick={closeMenu}> <NavLink>Testimonial</NavLink> </li>
                    <li onClick={closeMenu}> <NavLink>Services</NavLink> </li>
                    <li onClick={closeMenu}> <NavLink>Contact Us</NavLink> </li>
                    
                </ul>

                <div className="logins-details">
                    <button className="signin">Sign In</button>
                    <button className="signin">Sign Up</button>
                </div>

                <div className="toggle-btns" onClick={toggle}> 
                    { isMenu? <FaTimes /> : <FaBars/>}
                </div>

           


            </nav>

        </header>


      );
}
 
export default Nav;