import "./Work.scss";
import Telefone from "../../assets/icon-chamada.png";
import Email from "../../assets/icon-email.png";
import Loc from "../../assets/icon-endereco.png";


const Work = () => {
        return <section id="contact" className="works section-padding">
            <div className="section-title work">
                <h3>Let's work together!</h3>
                <span>I design and code beautifully simple things and i love what i do. Just simple like that!</span>
                <div className="container-principal">
                    <div className="espaco" id="nome">
                        <input type="text" placeholder="Enter your name" required/>
                    </div>
                    <div className="espaco" id="sobrenome">
                        <input type="text" placeholder="Enter your last name" required/>
                    </div>
                    <div className="espaco" id="celular">
                        <input type="tel" placeholder="Enter your phone number" required/>
                    </div>
                    <div className="espaco" id="email">
                        <input type="email" placeholder="Enter your email" required/>
                    </div>
                </div>
                <div id="mensagem">
                    <textarea  placeholder="Enter your message here" required></textarea>
                </div>
                
                <div className="botao">
                    <h4>Send Message</h4>
                </div>
            </div>
            <div className="atributos">
                <div className="lightshadow"></div>
                <div className="elipse-tel">
                    <div className="telefone">
                        <img src={Telefone} alt="" />
                    </div>
                <div className="info">
                    <h5>Phone</h5>
                    <h4>+55 67 992392623</h4>
                </div>
                </div>
                <div className="elipse-email">
                    <div className="email">
                        <img src={Email} alt="" />
                    </div>
                <div className="info">
                    <h5>Email</h5>
                    <h4>pedroj.oficial@gmail.com</h4>
                </div>
                </div>
                <div className="elipse-end">
                    <div className="endereco">
                        <img src={Loc} alt="" />
                    </div>
                    <div className="info">
                        <h5>Address</h5>
                        <h4>Brazil, Dourados - MS</h4>
                    </div>
                </div>
            </div>
        </section>
}

export default Work;