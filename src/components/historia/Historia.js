import "./Historia.scss";
import Persona2 from "../../assets/persona2.jpg";
import Persona3 from "../../assets/persona3.jpg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

const Historia = () => {
    return (
        <section id="testimonials" className="historia section-padding">
            <div className="section-title historias">
                <h3>My Client's Stories</h3>
                <span>We transform your vision into a one-of-a-kind web project that captivates both you and your audience, bringing your ideas to life in a way that truly stands out.</span>
            </div>
            <div className="container">
                <div className="quadros">
                    <div className="quadro1">
                        <img src={Persona3} alt="" />
                        <div className="name">Cesar Tavares</div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} className="estrela"/>
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} className="estrela"/>
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} className="estrela"/>
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} className="estrela"/>
                            <FontAwesomeIcon icon={faStarRegular} style={{ color: "#350101" }} className="estrela"/>
                        </div>
                        <p>
                        Great service! The project was delivered on time and with high quality. It's a very positive experience!
                        </p>
                    </div>
                    <div className="quadro2">
                        <img src={Persona2} alt="" />
                        <div className="name">William Nairuki</div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} className="estrela"/>
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} className="estrela" />
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} className="estrela"/>
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} className="estrela"/>
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} className="estrela"/>
                        </div>
                        <p>
                        Absolutely amazing experience! The team was professional and exceeded my expectations. I couldn’t be happier with the results!
                        </p>
                    </div>
                </div>
                <div className="options">
                    <div className="option" id="option1"></div>
                    <div className="option" id="option2"></div>
                    <div className="option" id="option3"></div>
                </div>
            </div>
        </section>
    );
};

export default Historia;
