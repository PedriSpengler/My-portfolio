import "./Work.scss";
import Telefone from "../../assets/icon-chamada.png";
import Email from "../../assets/icon-email.png";
import Loc from "../../assets/icon-endereco.png";
import '../hero/Hero.js';

import '../../lib/i18n';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import emailjs from "emailjs-com";

const Work = () => {

    const { t } = useTranslation();

    // Estado para armazenar os valores do formulário
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        celular: '',
        email: '',
        mensagem: ''
    });

    const [statusMessage, setStatusMessage] = useState("");

    // Função para lidar com mudanças nos inputs do formulário
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Função para enviar o formulário via EmailJS
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            "service_ytgga6i",  // Substitua com seu Service ID
            "template_7ganvjg", // Substitua com seu Template ID
            formData,           // Dados do formulário
            "6vTlQfe7hicE-haG7Ikbu" // Substitua com seu User ID
        )
        .then((result) => {
            setStatusMessage("Mensagem enviada com sucesso!");
        }, (error) => {
            setStatusMessage("Erro ao enviar a mensagem. Tente novamente.");
        });
    };

    return (
        <section id="contact" className="works section-padding">
            <div className="section-title work">
                <h3>{t('workH3')}</h3>
                <span>{t('workSPAN')}</span>

                {/* Formulário de Contato */}
                <form onSubmit={handleSubmit}>
                    <div className="container-principal">
                        <div className="espaco" id="nome">
                            <input
                                type="text"
                                name="nome"
                                placeholder={t('workPLACE1')}
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="espaco" id="sobrenome">
                            <input
                                type="text"
                                name="sobrenome"
                                placeholder={t('workPLACE2')}
                                value={formData.sobrenome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="espaco" id="celular">
                            <input
                                type="tel"
                                name="celular"
                                placeholder={t('workPLACE3')}
                                value={formData.celular}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="espaco" id="email">
                            <input
                                type="email"
                                name="email"
                                placeholder={t('workPLACE4')}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div id="mensagem">
                        <textarea
                            name="mensagem"
                            placeholder={t('workPLACE5')}
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button className="botao" type="submit">
                        <h4>{t('workH4')}</h4>
                    </button>
                </form>

                {/* Exibir status do envio da mensagem */}
                {statusMessage && <p>{statusMessage}</p>}
            </div>

            {/* Informações de contato (telefone, email, endereço) */}
            <div className="atributos">
                <div className="lightshadow"></div>
                <div className="elipse-tel">
                    <div className="telefone">
                        <img src={Telefone} alt="Ícone de telefone" />
                    </div>
                    <div className="info">
                        <h5>{t('workTEL')}</h5>
                        <h4>+55 67 992392623</h4>
                    </div>
                </div>
                <div className="elipse-email">
                    <div className="email">
                        <img src={Email} alt="Ícone de email" />
                    </div>
                    <div className="info">
                        <h5>{t('workEMAIL')}</h5>
                        <h4>pedroj.oficial@gmail.com</h4>
                    </div>
                </div>
                <div className="elipse-end">
                    <div className="endereco">
                        <img src={Loc} alt="Ícone de localização" />
                    </div>
                    <div className="info">
                        <h5>{t('workADDRESS')}</h5>
                        <h4>Brazil, Dourados - MS</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;
