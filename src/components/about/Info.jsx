import React from "react";
import "./Info.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import Details from "./details/Details";

const Info = () => {
  return (
    <>
      <div className="main-container">
        <div className="img-box">
          <img src="/src/components/about/myimg.jpg" alt="Vivek Awasthi Image" className="my-img" />
        </div>
        <div className="text-box">
          <div className="h4-box">
            <h4 className="text-h4">REACT JS DEVELOPER</h4>
          </div>
          <br />
          <h1 className="text-h1">Saransh Dwivedi</h1>
          <br />
          <p className="text-p">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning, I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
          <br />
          <div className="btn-box">
            <a href="/public/resume.pdf" className="cv-btn" download>
              Download CV
            </a>
          </div>
          <br />
          <div className="icons-box">
            <h4 className="social-label">Check out my: </h4>
         
            <a
              href="https://www.linkedin.com/in/saransh-dwivedi-97365b252/"
              className="icons-list"
              target="_blank"
            >
              <FaLinkedinIn className="linkedin social" />
            </a>
            <a
              href="https://github.com/codewithsaransh"
              className="icons-list"
              target="_blank"
            >
              <FiGithub className="github social" />
            </a>
           
          </div>
        </div>
      </div>
      <Details></Details>
    </>
  );
};

export default Info;
