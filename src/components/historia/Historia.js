import "./Historia.scss";
import Persona1 from "../../assets/persona1.jpg";
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
                <span>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</span>
            </div>
            <div className="container">
                <div className="quadros">
                    <div className="quadro1">
                        <img src={Persona3} alt="" />
                        <div className="name">Cesar Tavares</div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} />
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} />
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} />
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} />
                            <FontAwesomeIcon icon={faStarRegular} style={{ color: "#350101" }} />
                        </div>
                        <p>
                            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                        </p>
                    </div>
                    <div className="quadro2">
                        <img src={Persona2} alt="" />
                        <div className="name">William Nairuki</div>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} />
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} />
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} />
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} />
                            <FontAwesomeIcon icon={faStarSolid} style={{ color: "#350101" }} />
                        </div>
                        <p>
                            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
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
