import "./Resumo.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const Resumo = () => {
  return <section className="resumo section-padding">
    <div className="section-title experience">
      <h3 className="h3-exp">My Experience</h3>
      <div className="info-experience">
        <div className="exp-quadro quadro">
          <h4>2022-2023</h4>
          <h5>LEAD DEVELOPER</h5>
          <h6 className="desc">The Learner, Boston</h6>
        </div>
        <div className="exp-quadro quadro">
          <h4>2022-2023</h4>
          <h5>LEAD DEVELOPER</h5>
          <h6 className="desc">The Learner, Boston</h6>
        </div>
        <div className="exp-quadro quadro">
          <h4>2022-2023</h4>
          <h5>LEAD DEVELOPER</h5>
          <h6 className="desc">The Learner, Boston</h6>
        </div>
        <div className="exp-quadro quadro">
          <h4>2022-2023</h4>
          <h5>LEAD DEVELOPER</h5>
          <h6 className="desc">The Learner, Boston</h6>
        </div>
      </div>
    </div>
    <div className="section-title education">
      <h3 className="h3-edu">My Education</h3>
      <div className="info-education">
        <div className="edu-quadro quadro">
          <h4>2022-2023</h4>
          <h5>LEAD DEVELOPER</h5>
          <h6 className="desc">The Learner, Boston</h6>
        </div>
          <div className="edu-quadro quadro">
            <h4>2022-2023</h4>
            <h5>LEAD DEVELOPER</h5>
            <h6 class="desc">The Learner, Boston</h6>
          </div>
          <div className="edu-quadro quadro">
            <h4>2022-2023</h4>
            <h5>LEAD DEVELOPER</h5>
            <h6 className="desc">The Learner, Boston</h6>
          </div>
          <div className="edu-quadro quadro">
            <h4>2022-2023</h4>
            <h5>LEAD DEVELOPER</h5>
            <h6 className="desc">The Learner, Boston</h6>
          </div>
        </div>
    </div>
  </section>
};

export default Resumo;