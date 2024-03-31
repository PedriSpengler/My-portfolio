import './navbar.scss';
import Logo from "../../assets/Icon Pedri.png";
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";



const navbar = () => {
    const [showNav, setShowNav] = useState(false);
  
  return <header className="navbar">
    <div className="navbar_container wrapper">
        <a href="/" className="navbar_logo" onClick={() => setShowNav(false)}>
            <img src={Logo} alt="logo" />
        </a>

        <div className='navbar_links'>
            <ul className={`${showNav ? "show" : ""}`}>
                <li onClick={() => setShowNav(false)}>
                    <a href="/">Services</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="/">Resume</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="/">Skills</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="/">Projects</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="/">Testimonials</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="/">Contact</a>
                </li>
            </ul>

            <div className="navbar_menu" onClick={() => setShowNav(!showNav)}>
                {showNav ? <IoClose /> : <IoMenu />}
            </div>
        </div>
    </div>
  </header>
    
  
}

export default navbar;
