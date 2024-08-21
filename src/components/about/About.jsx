import React, { Component } from 'react';
import "./About.css";
import profile from '../images/profile_pic.jpeg';
import resume from '../images/Arghya CV.pdf';

export class About extends Component {
  handleDownload = () => {
    const secureResumeLink = resume.startsWith('http') ? resume.replace(/^http:/, 'https:') : resume;

    window.open(secureResumeLink, '_blank', 'noopener,noreferrer');
  };

  render() {
    return (
      <div id="about" className="containerAbout">
        <div className="leftAbout">
          <div className="aboutProfileContain">
            <img className='aboutProfile' src={profile} alt="Profile" />
          </div>
          <div className="leftAboutMe">
            <div className="leftAboutHead">
              <h1>About <span style={{ color: 'red' }}>Me</span></h1>
            </div>
            <p className='textLeftAbout'>
              Hi, I'm <b>Arghya Bhattacharjee</b>, a passionate and dedicated student currently pursuing my B.Tech in Information Technology (2022-2026) from JIS College of Engineering.
              My journey in the tech world has been incredibly exciting, and I'm always eager to learn and explore new technologies.
              I am a patent holder of the "AI-Based LPG Gas Leakage Detection and Fire Alert System,"
              a groundbreaking invention that enhances safety by detecting gas leaks and alerting
              users to potential fire hazards.
            </p>
          </div>
        </div>

        <div className="rightAbout">
          <div className="rightAboutBody">
            <div className="rightAboutMySkils">
              <h1 className='rightAboutSkillHead'>Skills and Interests:</h1>
              <ul>
                <li><b>Programming Languages:</b> Proficient in Python, Java, and JavaScript.</li>
                <li><b>Backend Development:</b> Experienced with PHP and currently learning Node.js.</li>
                <li><b>Frontend Development:</b> A keen learner of React.js, crafting intuitive and dynamic user interfaces.</li>
                <li><b>Database Management:</b> Skilled in MySQL.</li>
                <li><b>AI/ML Enthusiast:</b> Actively exploring the realms of Artificial Intelligence and Machine Learning.</li>
                <li><b>UI/UX Design:</b> Passionate about creating user-friendly and visually appealing interfaces.</li>
              </ul>
            </div>

            <div className="rightAboutMySkils">
              <h1 className='rightAboutSkillHead'>Achievements:</h1>
              <ul>
                <li><b>Patent Holder:</b> Proud inventor of the <b>"AI-Based LPG Gas Leakage Detection and Fire Alert System."</b></li>
              </ul>
            </div>

            <div className="rightAboutMySkils">
              <h1 className='rightAboutSkillHead'>Future Aspirations:</h1>
              <ul>
                <li>
                  As a budding Backend Developer and Frontend Developer,
                  I aim to bridge the gap between innovative backend solutions and seamless frontend experiences.
                  My interest in AI/ML drives me to constantly experiment with new ideas and technologies,
                  aiming to create impactful solutions.
                </li>
              </ul>
            </div>
          </div>
          <div className="buttonAbout">
            <button onClick={this.handleDownload}>Download CV</button>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
