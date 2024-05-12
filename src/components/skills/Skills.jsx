import React from "react";
import "./Skills.css";
import { FaHtml5, FaReact, FaHeadSideVirus, FaDiagnoses } from "react-icons/fa";
import { IoLogoCss3, IoIosPeople } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiSpeakFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className="main-skills-container">
      <section className="tech-skills">
        <h1 className="tech-h">Technical Skills</h1>
        <FaHtml5 className="html-icon" />
        <h2>HTML</h2>
        <div className="progress-bar">
          <div className="html">
            <span>95%</span>
          </div>
        </div>
        <IoLogoCss3 className="css-icon" />
        <h2>CSS</h2>
        <div className="progress-bar">
          <div className="css">
            <span>95%</span>
          </div>
        </div>
        <IoLogoJavascript className="js-icon" />
        <h2>JavaScript</h2>
        <div className="progress-bar">
          <div className="javascript">
            <span>80%</span>
          </div>
        </div>
        <FaReact className="react-icon" />
        <h2>React JS</h2>
        <div className="progress-bar">
          <div className="react">
            <span>75%</span>
          </div>
        </div>

        
      </section>

      <section className="other-skills">
        <h1 className="pro-h">Professional Skills</h1>
        <FaDiagnoses className="dedication-icon" />
        <h2>Dedication</h2>
        <div className="progress-bar">
          <div className="dedication">
            <span>100%</span>
          </div>
        </div>
        <IoIosPeople className="team-icon" />
        <h2>Teamwork</h2>
        <div className="progress-bar">
          <div className="teamwork">
            <span>90%</span>
          </div>
        </div>
        <RiSpeakFill className="speak-icon" />
        <h2>Communication</h2>
        <div className="progress-bar">
          <div className="communication">
            <span>90%</span>
          </div>
        </div>
        <FaHeadSideVirus className="creative-icon" />
        <h2>Creativity</h2>
        <div className="progress-bar">
          <div className="creativity">
            <span>85%</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
