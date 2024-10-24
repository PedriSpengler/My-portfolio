import './Rodape.scss';
import Logo from "../../assets/Icon Pedri.png";
import { useState, useEffect } from 'react';
import '../hero/Hero.js';

import '../../lib/i18n';
import { useTranslation } from "react-i18next";

const Rodape = () => {

    const { t } = useTranslation()
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
                <h5>© 2024 {t('rodape')} <strong>Pedri Spengler</strong></h5>
            </div>
        </section>
    );
};

export default Rodape;
