import React,{ useRef } from "react";
import "./Projetos.scss";
import Seta from '../../assets/seta.png';
import '../hero/Hero.js';

import '../../lib/i18n';
import { useTranslation } from "react-i18next";

const Projetos = () => {

  const { t } = useTranslation()

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      if (direction === "left") {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    }
  };

  return (
    <section id="projects" className="projetos section-padding">
      <div className="lightshadow"></div>
      <div className="section-title projeto">
        <h3>{t('projH3')}</h3>
        <span>{t('projSPAN')}</span>
        <div className="projetos-wrapper">
          <img
            className="setaesq"
            src={Seta}
            alt="Scroll Left"
            onClick={() => scroll("left")}
          />
          <div className="info-projetos" ref={scrollRef}>
            <div className="container bg1"></div>
            <div className="container bg2"></div>
            <div className="container bg3"></div>
            <div className="container bg4"></div>
            <div className="container bg5"></div>
          </div>
          <img
            className="setadir"
            src={Seta}
            alt="Scroll Right"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </section>
  );
};

export default Projetos;
