import React, { useRef } from "react";
import "./Contact.css";
import Linkein from '../images/linkedin.png';
import GitHub from '../images/github.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/insta.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_0h8gt4p", "template_tmvm9o8", form.current, {
      publicKey: "zLoKC6GATz12w7l1m",
    })
    .then(
      () => {
        e.target.reset();
        window.alert("Your message has been sent successfully!");
      },
      (error) => {
        window.alert("Failed to send your message. Please try again later.", error.text);
      }
    );
  };

  return (
    <div id="contact" className="containerContact">
      <div className="contactHead">
        <h1>
          Contact<span style={{ color: "red" }}>Me</span>
        </h1>
      </div>
      <div className="contactBody">
        <div className="contactBodyLeft">
          <h1 className="contactBodyLeftTitle">Let's Connect on Social Media!</h1>
          <p>
            I'm available on various social media platforms where you can follow my journey, explore my projects, and engage with my work.
            Connect with me on LinkedIn to see my professional updates, GitHub to explore my code and projects, and follow on Facebook & Instagram for more personal interactions.
            Feel free to reach out to me on any of these platforms. I'm looking forward to connecting with you!
          </p>
          <div className="mainContactImgContainer">
            <div className="contactImgContainer">
              <a href="https://www.linkedin.com/in/arghya-bhattacharjee876/" target="_blank" rel="noreferrer">
                <img className="contactImg" src={Linkein} alt="LinkedIn" />
              </a>
            </div>
            <div className="contactImgContainer">
              <a href="https://github.com/Arghya876" target="_blank" rel="noreferrer">
                <img className="contactImg" src={GitHub} alt="GitHub" />
              </a>
            </div>
            <div className="contactImgContainer">
              <a href="https://www.facebook.com/arghya.bhattacharjee.583/" target="_blank" rel="noreferrer">
                <img className="contactImg" src={Facebook} alt="Facebook" />
              </a>
            </div>
            <div className="contactImgContainer">
              <a href="https://www.instagram.com/arghya.bhattacharjee/" target="_blank" rel="noreferrer">
                <img className="contactImg" src={Instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="contactBodyRight">
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <label htmlFor="your_name">Your Name:</label>
            <input type="text" name="your_name" placeholder="Enter Your Name" required />
            <label htmlFor="your_email">Your Email:</label>
            <input type="email" name="your_email" placeholder="Enter Your Email" required />
            <label htmlFor="message">Your Message:</label>
            <textarea name="message" rows="8" placeholder="Write Your Message Here" required></textarea>
            <button className="contactSubmit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
