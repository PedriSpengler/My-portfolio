import './Rodape.scss';
import Logo from "../../assets/Icon Pedri.png";
import { useState, useEffect } from 'react';

const Rodape = () => {
    const [showNav, setShowNav] = useState(false);

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

        const links = document.querySelectorAll('.rodape a');
        links.forEach(link => link.addEventListener('click', handleScroll));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleScroll));
        };
    }, []);

    return (
        <section className="rodape section-padding">
            <div className="section-title rodapes">
                <img src={Logo} alt="logo" />
                <ul className={`${showNav ? "show" : ""}`}>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#home">Home</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#resume">Resume</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#services">Services</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#skills">Skills</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#projects">Projects</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <h5>© 2024 All rights reserved by <strong>Pedri Spengler</strong></h5>
            </div>
        </section>
    );
};

export default Rodape;
