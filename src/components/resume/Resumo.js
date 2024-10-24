import "./Resumo.scss";
import "aos/dist/aos.css";
import '../hero/Hero.js';

import '../../lib/i18n';
import { useTranslation } from "react-i18next";


const Resumo = () => {

  const { t } = useTranslation()

  return <section id="resume" className="resumo section-padding">
    <div className="section-title experience">
      <h3 className="h3-exp">{t('resH3EXP')}</h3>
      <div className="info-experience">
        <div className="exp-quadro quadro">
          <h4>2022-2024</h4>
          <h5>FREELANCE FULL-STACK DEVELOPER</h5>
          <h6 className="desc">Dourados, MS</h6>
        </div>
        <div className="exp-quadro quadro">
          <h4>2022-2024</h4>
          <h5>FREELANCE UX DESIGN</h5>
          <h6 className="desc">Dourados, MS</h6>
        </div>
        <div className="exp-quadro quadro">
          <h4>---</h4>
          <h5>---</h5>
          <h6 className="desc">---</h6>
        </div>
        <div className="exp-quadro quadro">
          <h4>---</h4>
          <h5>---</h5>
          <h6 className="desc">---</h6>
        </div>
      </div>
    </div>
    <div className="section-title education">
      <h3 className="h3-edu">{t('resH3EDU')}</h3>
      <div className="info-education">
        <div className="edu-quadro quadro">
          <h4>2024</h4>
          <h5>PRO FIGMA - UI DESIGN</h5>
          <h6 className="desc">Lucas Marte, Udemy</h6>
        </div>
        <div className="edu-quadro quadro">
          <h4>2024</h4>
          <h5>NLW EXPERT TILHA REACT NATIVE</h5>
          <h6 class="desc">Rocketseat</h6>
        </div>
        <div className="edu-quadro quadro">
          <h4>2023</h4>
          <h5>JAVA COM SPRING BOOT</h5>
          <h6 className="desc">Rocketseat</h6>
        </div>
        <div className="edu-quadro quadro">
          <h4>2023</h4>
          <h5>GO-LANG INTRODUÇÃO E USO</h5>
          <h6 className="desc">SIC</h6>
        </div>
          
        </div>
    </div>
  </section>
};

export default Resumo;