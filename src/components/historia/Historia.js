import "./Historia.scss";
import Persona2 from "../../assets/persona2.jpg";
import Persona3 from "../../assets/persona3.jpg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import '../hero/Hero.js';

import '../../lib/i18n';
import { useTranslation } from "react-i18next";

const Historia = () => {

    const { t } = useTranslation()

    return (
        <section id="testimonials" className="historia section-padding">
            <div className="section-title historias">
                <h3>{t('histH3')}</h3>
                <span>{t('histSPAN')}</span>
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
                        {t('histP1')}
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
                        {t('histP2')}
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
