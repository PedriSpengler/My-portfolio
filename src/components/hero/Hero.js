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
  return <section className="hero">
    <div className="hero_container wrapper">
        <div className="hero_left" data-aos="fade-up">
            <h3>Hi, I'm Pedri</h3>
            <h1>Web Developer + <br />
            UX Designer
            </h1>
            <h4>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people.</h4>
            <div className="hero_left_references">
                <a href="/" id="curriculum">Download CV</a>
                <a href="/">
                    <img id="linkedin" src={LinkedinImg} alt="" />
                </a>
                <a href="/">
                    <img id="instagram" src={InstagramImg} alt="" />
                </a>
                <a href="/">
                    <img id="email" src={EmailImg} alt="" />
                </a>
                <a href="/">
                    <img id="github" src={GithubImg} alt="" />
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

export default Hero