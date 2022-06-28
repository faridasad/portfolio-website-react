import React from "react";
import "./contact.scss";
import { LocationOn, Call, Email, LinkedIn, GitHub, Facebook, Instagram } from '@mui/icons-material'

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-header">Contact</h1>
      <div className="contact-wrapper">
        <div className="contact-left">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="contact-right">
          <p><span><LocationOn /></span>Azerbaijan, Baku</p>
          <p><span><Call /></span>(+994) 50 - 479 - 48 - 36</p>
          <p><span><Email /></span>asadlifaridd@gmail.com</p>
          <div className="line"></div>
          <div className="social-icons">
            <span><GitHub /></span>
            <span><LinkedIn /></span>
            <span><Facebook /></span>
            <span><Instagram /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
