import "./Projetos.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Seta from '../../assets/seta.png';

const Projetos = () => {
    return (
        <section className="projetos section-padding">
            <div className="lightshadow"></div>
            <div className="section-title projeto">
                <h3>My Projects</h3>
                <span>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</span>
                <div className="projetos-wrapper">
                    <img className="setaesq" src={Seta} alt="" />
                    <div className="info-projetos">
                        <div className="container">
                            <div className="bg1"></div>
                        </div>
                        <div className="container">
                            <div className="bg2"></div>
                        </div>
                        <div className="container">
                            <div className="bg3"></div>
                        </div>
                    </div>
                    <img className="setadir" src={Seta} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Projetos;
