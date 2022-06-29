import React, {useState} from "react";
import emailjs from 'emailjs-com';
import "./contact.scss";
import { LocationOn, Call, Email, LinkedIn, GitHub, Facebook, Instagram } from '@mui/icons-material'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6zybi28",
        "template_zojjtgn",
        e.target,
        "PkX4Nz97P7HvevJbI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true)
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset();
  };


  return (
    <div className="contact" id="contact">
      <h1 className="contact-header">Contact</h1>
      <div className="contact-wrapper">
        <div className="contact-left">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name"  name="from_name"/>
            <input type="email" placeholder="Email"  name="email"/>
            <input type="tetx" placeholder="Subject"  name="subject"/>
            <textarea id="" cols="30" rows="10" placeholder="Message" name="message"></textarea>
            <button type="submit">Send</button>
            {isSubmitted && "Thanks..."}
          </form>
        </div>
        <div className="contact-right">
          <p><span><LocationOn /></span>Azerbaijan, Baku</p>
          <p><span><Call /></span>(+994) 50 - 479 - 48 - 36</p>
          <p><span><Email /></span>asadlifaridd@gmail.com</p>
          <div className="line"></div>
          <div className="social-icons">
            <a href="https://github.com/faridasad" target="_blank" rel="noreferrer"><span><GitHub /></span></a>
            <a href="https://www.linkedin.com/in/faridasadli/" target="_blank" rel="noreferrer"><span><LinkedIn /></span></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><span><Facebook /></span></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><span><Instagram /></span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
