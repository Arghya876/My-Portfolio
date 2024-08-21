import React, { Component } from "react";
import "./Projects.css";
import miss_minutes from '../images/miss_minutes.png';
import chess from '../images/chess.png';
import student_manage_py from '../images/student_manage_py.png';
import login_py from '../images/login_py.png';
import manage_db from '../images/manage_db.png';

class Projects extends Component {
  render() {
    return (
      <div id="project" className="containerProjects">
        <div className="projectHead">
          <h1>
            My<span style={{ color: "red" }}>Projects</span>
          </h1>
        </div>
        <div className="projectsBody">
          <div className="projects">
            <img className="projectPic" src={miss_minutes} alt="Projects" />
            <div className="aboutProject">
                <p>Miss Minutes</p>
            </div>
          </div>

          <div className="projects">
            <img className="projectPic" src={chess} alt="Projects" />
            <div className="aboutProject">
                <p>Chess Game</p>
            </div>
          </div>

          <div className="projects">
            <img className="projectPic" src={student_manage_py} alt="Projects" />
            <div className="aboutProject">
                <p>Student Management System Using Python (Tkinter)</p>
            </div>
          </div>

          <div className="projects">
            <img className="projectPic" src={login_py} alt="Projects" />
            <div className="aboutProject">
                <p>Management Login Page Using Python (Tkinter)</p>
            </div>
          </div>

          <div className="projects">
            <img className="projectPic" src={manage_db} alt="Projects" />
            <div className="aboutProject">
                <p>MySQL Database</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
