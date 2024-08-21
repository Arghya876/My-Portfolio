import React, { Component } from "react";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <div id="skill" className="containerSkills">
        <div className="skillHead">
          <h1>
            My<span style={{ color: "red" }}>Skills</span>
          </h1>
        </div>
        <div className="skillBody">
          <div className="leftSkill">
            <div className="skillImgContainer">
              <div className="skillImgContainerItem">
                <a href="https://www.java.com" target="_blank" rel="noreferrer">
                  <img
                    className="skillImg"
                    src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
                    alt="java"
                  />
                </a>
              </div>
              <p>Java</p>
            </div>

            <div className="skillImgContainer">
              <div className="skillImgContainerItem">
                <a
                  href="https://www.python.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="skillImg"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    alt="python"
                  />
                </a>
              </div>
              <p>Python</p>
            </div>

            <div className="skillImgContainer">
              <div className="skillImgContainerItem">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="skillImg"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    style={{ width: "40px" }}
                  />
                </a>
              </div>
              <p>JavaScript</p>
            </div>

            <div className="skillImgContainer">
              <div className="skillImgContainerItem">
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img
                    className="skillImg"
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt="react"
                  />
                </a>
              </div>
              <p>React</p>
            </div>

            <div className="skillImgContainer">
              <div className="skillImgContainerItem">
                <a href="https://www.php.net" target="_blank" rel="noreferrer">
                  <img
                    className="skillImg"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                    alt="php"
                  />
                </a>
              </div>
              <p>php</p>
            </div>

            <div className="skillImgContainer">
              <div className="skillImgContainerItem">
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="skillImg"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                    alt="mysql"
                  />
                </a>
              </div>
              <p>MySQL</p>
            </div>

            <div className="skillImgContainer">
              <div className="skillImgContainerItem">
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <img
                    className="skillImg"
                    src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                    alt="nodejs"
                  />
                </a>
              </div>
              <p>NodeJs</p>
            </div>

            <div className="skillImgContainer">
              <div className="skillImgContainerItem">
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="skillImg"
                    src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                    alt="mongodb"
                  />
                </a>
              </div>
              <p>MongoDB</p>
            </div>

            <div className="skillImgContainer">
              <div className="skillImgContainerItem">
                <a
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="skillImg"
                    src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                    alt="Figma"
                    style={{ width: "40px" }}
                  />
                </a>
              </div>
              <p>Figma</p>
            </div>
          </div>

          <div className="rightSkill">
              <img
                className="rightSkillImg"
                src="https://github-readme-stats.vercel.app/api/top-langs?username=arghya876&show_icons=true&locale=en&layout=compact"
                alt="arghya876"
              />
            <img
              className="rightSkillImg"
              src="https://github-readme-stats.vercel.app/api?username=arghya876&show_icons=true&locale=en"
              alt="arghya876"
            />
            <img
              className="rightSkillImg"
              src="https://github-readme-streak-stats.herokuapp.com/?user=arghya876&"
              alt="arghya876"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
