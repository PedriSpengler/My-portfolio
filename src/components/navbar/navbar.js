import './Navbar.scss';
import Logo from "../../assets/Icon Pedri.png";
import { useState, useEffect } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import '../hero/Hero.js';

import '../../lib/i18n';
import { useTranslation } from "react-i18next";


const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const { t } = useTranslation()

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetPosition = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        };

        const links = document.querySelectorAll('.navbar_links a');
        links.forEach(link => link.addEventListener('click', handleScroll));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleScroll));
        };
    }, []);

    return (
        <header className="navbar">
            <div className="navbar_container wrapper">
                <a href="/" className="navbar_logo" onClick={() => setShowNav(false)}>
                    <img src={Logo} alt="logo" />
                </a>

                <div className='navbar_links'>
                    <ul className={`${showNav ? "show" : ""}`}>
                        <li onClick={() => setShowNav(false)}>
                            <a href="#home">{t('nav1')}</a>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <a href="#resume">{t('nav2')}</a>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <a href="#services">{t('nav3')}</a>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <a href="#skills">{t('nav4')}</a>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <a href="#projects">{t('nav5')}</a>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <a href="#testimonials">{t('nav6')}</a>
                        </li>
                        <li onClick={() => setShowNav(false)}>
                            <a href="#contact">{t('nav7')}</a>
                        </li>
                    </ul>

                    <div className="navbar_menu" onClick={() => setShowNav(!showNav)}>
                        {showNav ? <IoClose className='icon-close' /> : <IoMenu className='icon-menu' />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
