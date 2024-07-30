import "./Rodape.scss";
import Logo from "../../assets/Icon Pedri.png";
import { useState } from 'react';

const Rodape = () => {

    const [showNav, setShowNav] = useState(false);
    return <section className="rodape section-padding">
        <div className="section-title rodapes">
            <img src={Logo} alt="" />
            <ul className={`${showNav ? "show" : ""}`}>
                <li onClick={() => setShowNav(false)}>
                    <a href="/">Home</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="/">Resume</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="/">Services</a>
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
            <h5>© 2024 All rights reserved by <strong>Pedri Spengler</strong></h5>
        </div>
    </section>
}

export default Rodape;