import "./Projetos.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import Publi1 from '../../assets/publi1.jpg';
import Publi2 from '../../assets/publi2.jpg';
import Publi3 from '../../assets/publi3.jpg';

const Projetos = () => {
    return <section className="projetos section-padding">
        <div className="section-title projeto">
            <h3>My Projects</h3>
            <span>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</span>
            <div className="info-projetos">
                <div className="container">
                    <img src={Publi1} alt="" />
                </div>
                <div className="container">
                    <img src={Publi2} alt="" />
                </div>
                <div className="container">
                    <img src={Publi3} alt="" />
                </div>
            </div>
        </div>
    </section>


};

export default Projetos;
    