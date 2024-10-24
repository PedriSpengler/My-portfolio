import "./Hero.scss";
import LinkedinImg from "../../assets/linkedin.png";
import InstagramImg from "../../assets/instagram.png";
import EmailImg from "../../assets/gmail.png";
import GithubImg from "../../assets/github.png";
import EUA from "../../assets/eua.png";
import BRA from "../../assets/br.png";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState} from "react"; 

import '../../lib/i18n';
import { useTranslation } from "react-i18next";

const Hero = () => {

    const { t, i18n: {changeLanguage, language} } = useTranslation()
    const [currentLanguage, setCurrentLanguage] = useState(language)

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
        changeLanguage(newLanguage)
        
        setCurrentLanguage(newLanguage)
    }

    const [isUSA, setIsUSA] = useState(true); // Começa com USA

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const handleClick = () => {
        setIsUSA((prevState) => !prevState);
    };

    return (
        <section id="home" className="hero">
            <div className="hero_container wrapper">
                <div className="hero_left" data-aos="fade-up">
                    <div className="idioma">
                        <div className={`elipse ${!isUSA ? "move-right usa" : ""}`}> {/* Muda a condição */}
                            <img
                                src={isUSA ? EUA : BRA}
                                alt={isUSA ? "USA flag" : "BRA flag"}
                                onClick={() => {
                                    handleClick();
                                    handleChangeLanguage();
                                }}
                            />
                        </div>
                    </div>
                    <h3>{t('heroH3')}</h3>
                    <h1>{t('heroH1')}<br />
                    {t('heroH1br')}
                    </h1>
                    <h4>{t('heroH4')}</h4>
                    <div className="hero_left_references">
                        <a href="/CurriculoAtual.pdf" id="curriculum" download>Download CV</a>
                        <a href="https://www.linkedin.com/in/pedro-spengler-23476b259/" target="_blank" rel="noopener noreferrer">
                            <img id="linkedin" src={LinkedinImg} alt="LinkedIn Profile" />
                        </a>
                        <a href="https://www.instagram.com/pedrispengler/" target="_blank" rel="noopener noreferrer">
                            <img id="instagram" src={InstagramImg} alt="Instagram Profile" />
                        </a>
                        <a href="mailto:pedroj.oficial@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img id="email" src={EmailImg} alt="Email Profile" />
                        </a>
                        <a href="https://github.com/PedriSpengler" target="_blank" rel="noopener noreferrer">
                            <img id="github" src={GithubImg} alt="Github Profile" />
                        </a>
                    </div>
                    <span className="hi">PEDRI</span>
                    <div className="lightShadow"></div>
                    <div className="lightShadow2"></div>
                </div>
                <div className="hero_right" data-aos="fade-left">
                    <div className="hero_right-img"></div>
                </div>
                <div className="hero_description wrapper">
                    <div className="desc" id="yearsDiv">
                        <h3 id="yearsNum">4</h3>
                        <span id="yearsText">{t('heroSPAN1')}</span>
                    </div>
                    <div className="desc" id="projectsDiv">
                        <h3 id="projectsNum">20+</h3>
                        <span id="projectsText">{t('heroSPAN2')}</span>
                    </div>
                    <div className="desc" id="happyclientsDiv">
                        <h3 id="happyclientsNum">1.5K</h3>
                        <span id="happyclientsText">{t('heroSPAN3')}</span>
                    </div>
                    <div className="desc" id="followersDiv">
                        <h3 id="followersNum">1K</h3>
                        <span id="followersText">{t('heroSPAN4')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
