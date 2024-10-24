import "./Work.scss";
import Telefone from "../../assets/icon-chamada.png";
import Email from "../../assets/icon-email.png";
import Loc from "../../assets/icon-endereco.png";
import '../hero/Hero.js';

import '../../lib/i18n';
import { useTranslation } from "react-i18next";


const Work = () => {

    const { t } = useTranslation()

        return <section id="contact" className="works section-padding">
            <div className="section-title work">
                <h3>{t('workH3')}</h3>
                <span>{t('workSPAN')}</span>
                <div className="container-principal">
                    <div className="espaco" id="nome">
                        <input type="text" placeholder={t('workPLACE1')} required/>
                    </div>
                    <div className="espaco" id="sobrenome">
                        <input type="text" placeholder={t('workPLACE2')} required/>
                    </div>
                    <div className="espaco" id="celular">
                        <input type="tel" placeholder={t('workPLACE3')} required/>
                    </div>
                    <div className="espaco" id="email">
                        <input type="email" placeholder={t('workPLACE4')} required/>
                    </div>
                </div>
                <div id="mensagem">
                    <textarea  placeholder={t('workPLACE5')} required></textarea>
                </div>
                
                <div className="botao">
                    <h4>{t('workH4')}</h4>
                </div>
            </div>
            <div className="atributos">
                <div className="lightshadow"></div>
                <div className="elipse-tel">
                    <div className="telefone">
                        <img src={Telefone} alt="" />
                    </div>
                <div className="info">
                    <h5>{t('workTEL')}</h5>
                    <h4>+55 67 992392623</h4>
                </div>
                </div>
                <div className="elipse-email">
                    <div className="email">
                        <img src={Email} alt="" />
                    </div>
                <div className="info">
                    <h5>{t('workEMAIL')}</h5>
                    <h4>pedroj.oficial@gmail.com</h4>
                </div>
                </div>
                <div className="elipse-end">
                    <div className="endereco">
                        <img src={Loc} alt="" />
                    </div>
                    <div className="info">
                        <h5>{t('workADDRESS')}</h5>
                        <h4>Brazil, Dourados - MS</h4>
                    </div>
                </div>
            </div>
        </section>
}

export default Work;