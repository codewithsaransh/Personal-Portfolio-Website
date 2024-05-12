import React from "react";
import "./Details.css";
import {
  FaMicrophone,
  FaSwimmer,
  FaPlane,
  FaCode,
  FaMusic,
  FaPhoneAlt,
  FaHome,
  FaDesktop,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiMovieFill } from "react-icons/ri";
import { MdSportsCricket } from "react-icons/md";

export const Details = () => {
  return (
    <div className="main-box">
      <div className="heading-name">
        <h1 className="details-h">Personel Details</h1>
        <h1 className="hobby-h">Hobbies</h1>
      </div>

      <div className="content-box">
        <div className="details-heading">
          <h1>Personel Details</h1>
        </div>

        <div className="personel-info-sec">
          <section className="my-details">
            <p className="phone">
              <FaPhoneAlt />
              {/* Phone-- */}
            </p>
            <p className="email">
              <MdEmail />
              {/* Email-- */}
            </p>
            <p className="hometown">
              <FaHome />
              {/* Hometown-- */}
            </p>
            <p className="location">
              <FaLocationDot />
              {/* Current location-- */}
            </p>
            <p className="carrer">
              <FaDesktop />
              {/* Carrer in-- */}
            </p>
          </section>
          <section className="my-details-content">
            <span className="num spn">+91 9399043381</span>
            <span className="mail spn">dwivedisaransh6@gmail.com</span>
            <span className="town spn">Khajuraho (471606)</span>
            <span className="city spn">Indore (452014)</span>
            <span className="it spn">Information Technology</span>
          </section>
        </div>

        <div className="hobby-heading">
          <h1>Hobbies</h1>
        </div>

        <div className="for-hobby-sec">
          <section className="hobby-list">
            <p className="singing-hobby hobby">
              <FaMicrophone /> <br />
              <span className="sing spn-2">singing</span>
            </p>
            <p className="swiming-hobby hobby">
              <FaSwimmer /> <br />
              <span className="swim spn-2">swim</span>
            </p>
            <p className="traveling-hobby hobby">
              <FaPlane /> <br />
              <span className="travel spn-2">travel</span>
            </p>
            <p className="music-hobby hobby">
              <FaMusic /> <br />
              <span className="music spn-2">music</span>
            </p>
          </section>
          <section className="hobby-list-2">
            <p className="coding-hobby hobby">
              <FaCode /> <br />
              <span className="code spn-2">code</span>
            </p>
            <p className="commentry-hobby hobby">
              <FaMicrophone /> <br />
              <span className="commentry spn-2">commentry</span>
            </p>
            <p className="movie-hobby hobby">
              <RiMovieFill /> <br /> <span className="movie spn-2">movie</span>
            </p>
            <p className="sport-hobby hobby">
              <MdSportsCricket /> <br />
              <span className="sport spn-2">sports</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Details;
