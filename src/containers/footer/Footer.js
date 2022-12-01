import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient-text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>
            Woldeamanual Getnet, <br /> All Rights Reserved
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Addis Ababa, Ethiopia</p>
          <p>+251 985 412 182</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>{currentYear} GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};
