import React from "react";
import "./Contact.css";
import { FaPaperPlane } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <h1 className="cont-h">Contact Me</h1>
      <div className="main-contact-box">
        <div className="form-box">
          <form action="mailto:dwivedisaransh6@gmail.com">
            <input
              type="text"
              placeholder="Enter your name"
              className="name-box"
              required
            />
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="email-box"
              required
            />
            <input
              type="text"
              placeholder="Enter your phone number"
              className="number-box"
              required
            />
            <textarea
              className="msg-box"
              cols="25"
              rows="5"
              placeholder="Enter your message..."
            />
            <br />
            <div className="send-box">
              <button className="send-btn">
                <FaPaperPlane className="btn-logo" />
                SEND
              </button>
            </div>
          </form>
        </div>

        <div className="image-box">
          <img src="/coder.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
