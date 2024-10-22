import "./Servicos.scss";
import "aos/dist/aos.css";

const Servicos = () => {
    return <section id="services" className="servico section-padding">
        <div className="light-shadow"></div>
        <div className="section-title servicos">
            <h3>My Quality Services</h3>
            <span>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</span>
            <div className="info-servicos">
                <div className="servicoNum">
                    <div className="num">01</div>
                    <div className="nome">Web Developer</div>
                    <div className="desc">I transform complex requirements into seamless, efficient web solutions, building responsive and dynamic websites that deliver exceptional user experiences.</div>
                    <div className="line"></div>
                </div>
                <div className="servicoNum">
                    <div className="num">02</div>
                    <div className="nome">UI/UX Design</div>
                    <div className="desc">I simplify intricate user experience challenges to design cohesive, user-centered solutions that drive engagement and deliver value.</div>
                    <div className="line"></div>
                </div>
                <div className="servicoNum">
                    <div className="num">03</div>
                    <div className="nome">Mobile Developer</div>
                    <div className="desc">I build intuitive, high-performance mobile applications that seamlessly adapt to user needs, creating responsive, user-friendly experiences across all devices.</div>
                    <div className="line"></div>
                </div>
                <div className="servicoNum">
                    <div className="num">04</div>
                    <div className="nome">Data Analyst</div>
                    <div className="desc">I turn raw data into actionable insights, leveraging analytics to inform strategic decisions and drive business growth with data-driven solutions.</div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    </section>
};

 export default Servicos;