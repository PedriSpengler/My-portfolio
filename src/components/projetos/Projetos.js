import React,{ useRef } from "react";
import "./Projetos.scss";
import Seta from '../../assets/seta.png';

const Projetos = () => {
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
        <h3>My Projects</h3>
        <span>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</span>
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
