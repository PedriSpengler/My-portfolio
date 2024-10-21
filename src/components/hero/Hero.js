import "./Hero.scss";
import LinkedinImg from "../../assets/linkedin.png";
import InstagramImg from "../../assets/instagram.png";
import EmailImg from "../../assets/gmail.png";
import GithubImg from "../../assets/github.png";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 1000});
    });
  return <section id="home" className="hero">
    <div className="hero_container wrapper">
        <div className="hero_left" data-aos="fade-up">
            <h3>Hi, I'm Pedri</h3>
            <h1>Web Developer + <br />
            UX Designer
            </h1>
            <h4>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people.</h4>
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
                <span id="yearsText">Years Of Experience</span>
            </div>
            <div className="desc" id="projectsDiv">
                <h3 id="projectsNum">20+</h3>
                <span id="projectsText">Projects Completeds</span>
            </div>
            <div className="desc" id="happyclientsDiv">
                <h3 id="happyclientsNum">1.5K</h3>
                <span id="happyclientsText">Happy Clients</span>
            </div>
            <div className="desc" id="followersDiv">
                <h3 id="followersNum">1K</h3>
                <span id="followersText">Followers</span>
            </div>
        </div>
    </div>
  </section>
};

export default Hero;