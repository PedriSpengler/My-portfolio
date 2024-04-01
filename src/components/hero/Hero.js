import "./Hero.scss";
import LinkedinImg from "../../assets/linkedin.png";
import InstagramImg from "../../assets/instagram.png";
import EmailImg from "../../assets/gmail.png";
import GithubImg from "../../assets/github.png";

const Hero = () => {
  return <section className="hero">
    <div className="hero_container wrapper">
        <div className="hero_left">
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
            <span className="hi">HI</span>
            <div className="lightShadow"></div>
            <div className="lightShadow2"></div>
        </div>
        <div className="hero_right">
            <div className="hero_right-img"></div>
        </div>
    </div>
  </section>
};

export default Hero