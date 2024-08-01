import "./Skills.scss";
import "aos/dist/aos.css";
import ImgUIUX from "../../assets/uiux.png";

const Skills = () => {
    return <section id="skills" className="skills section-padding">
        <div className="section-title skills">
            <h3>My Skills</h3>
            <div className="languages">
                <div id="box">
                    <img className="html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                    <span>HTML</span>
                </div>
                <div id="box">
                    <img className="css" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />    
                    <span>CSS</span> 
                </div>
                <div id="box">
                    <img className="js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <span>JS</span>
                </div>
                <div id="box">
                    <img className="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                    <span>REACT</span>
                </div>
                <div id="box">
                    <img className="sass" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
                    <span>SASS</span>
                </div>
                <div id="box">
                    <img className="nodejs" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                    <span>NODEJS</span>
                </div>
                <div id="box">
                    <img className="csharp" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                    <span>C#</span>
                </div>
                <div id="box">
                    <img className="figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                    <span>FIGMA</span>
                </div>
                <div id="box">
                    <img className="git" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                    <span>GIT</span>
                </div>
                <div id="box">
                    <img className="python" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                    <span>PYTHON</span>
                </div>
                <div id="box">
                    <img className="sql" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                    <span>MYSQL</span>
                </div>
                <div id="box">
                    <img className="uiux" src={ImgUIUX}/>
                    <span>UI/UX</span>
                </div>

            </div>
        </div>
    </section>


};

export default Skills;