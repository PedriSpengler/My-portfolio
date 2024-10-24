import "./Servicos.scss";
import "aos/dist/aos.css";
import '../hero/Hero.js';

import '../../lib/i18n';
import { useTranslation } from "react-i18next";

const Servicos = () => {

    const { t } = useTranslation()

    return <section id="services" className="servico section-padding">
        <div className="light-shadow"></div>
        <div className="section-title servicos">
            <h3>{t('servH3')}</h3>
            <span>{t('servSPAN')}</span>
            <div className="info-servicos">
                <div className="servicoNum">
                    <div className="num">01</div>
                    <div className="nome">{t('servNOME1')}</div>
                    <div className="desc">{t('servDESC1')}</div>
                    <div className="line"></div>
                </div>
                <div className="servicoNum">
                    <div className="num">02</div>
                    <div className="nome">{t('servNOME2')}</div>
                    <div className="desc">{t('servDESC2')}</div>
                    <div className="line"></div>
                </div>
                <div className="servicoNum">
                    <div className="num">03</div>
                    <div className="nome">{t('servNOME3')}</div>
                    <div className="desc">{t('servDESC3')}</div>
                    <div className="line"></div>
                </div>
                <div className="servicoNum">
                    <div className="num">04</div>
                    <div className="nome">{t('servNOME4')}</div>
                    <div className="desc">{t('servDESC4')}</div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    </section>
};

 export default Servicos;