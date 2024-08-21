import React, { Component } from "react";
import "./Service.css";

class Service extends Component {
  state = {
    activeService: {},
  };

  handleClick = (service) => {
    this.setState((prevState) => ({
      activeService: {
        ...prevState.activeService,
        [service]: !prevState.activeService[service],
      },
    }));
  };

  render() {
    const { activeService } = this.state;

    return (
      <div id="service" className="containerService">
        <div className="serviceHead">
          <h1>
            My<span style={{ color: "red" }}>Services</span>
          </h1>
        </div>
        <div className="serviceBody">
          <div className="services">
            <h2>Frontend Development:</h2>
            <p>
              Crafting intuitive and dynamic user interfaces using React.js and JavaScript.
              Ensuring responsive and accessible design to provide...
            </p>
            <h4 className="serviceReadMore" onClick={() => this.handleClick("frontend")}>
              Read More
            </h4>
          </div>

          <div className="services">
            <h2>Backend Development:</h2>
            <p>
              Building robust and scalable server-side applications using PHP and Node.js.
              Implementing secure and efficient APIs to facilitate...
            </p>
            <h4 className="serviceReadMore" onClick={() => this.handleClick("backend")}>
              Read More
            </h4>
          </div>

          <div className="services">
            <h2>Desktop Applications:</h2>
            <p>
              Developing desktop applications with graphical user interfaces (GUI) using Python's Tkinter library.
              Creating interactive and user-friendly...
            </p>
            <h4 className="serviceReadMore" onClick={() => this.handleClick("desktop")}>
              Read More
            </h4>
          </div>

          <div className="services">
            <h2>UI/UX Design:</h2>
            <p>
              Designing user interfaces that are both functional and aesthetically pleasing.
              Conducting user research...
            </p>
            <h4 className="serviceReadMore" onClick={() => this.handleClick("uiux")}>
              Read More
            </h4>
          </div>

          {activeService["frontend"] && (
            <div className="readMoreServices active">
              <i className="fa-solid fa-xmark" onClick={() => this.handleClick("frontend")}></i>
              <div className="readMoreServicesHeading">
                <h1>Frontend Development:</h1>
              </div>
              <p>
                Crafting intuitive and dynamic user interfaces using React.js and JavaScript.
                Ensuring responsive and accessible design to provide a seamless user experience across all devices.
                Utilizing modern design principles to create visually appealing and user-friendly websites.
              </p>
              <br />
              <ul>
                <li><b>ReactJS:</b> Building dynamic, interactive, and high-performance user interfaces with ReactJS.</li>
                <li><b>JavaScript:</b> Implementing complex functionalities and enhancing user experience with vanilla JavaScript and ES6+ features.</li>
                <li><b>Responsive Design:</b> Creating mobile-first, responsive websites that look great on all devices and screen sizes.</li>
              </ul>
            </div>
          )}

          {activeService["backend"] && (
            <div className="readMoreServices active">
              <i className="fa-solid fa-xmark" onClick={() => this.handleClick("backend")}></i>
              <div className="readMoreServicesHeading">
                <h1>Backend Development:</h1>
              </div>
              <p>
                Building robust and scalable server-side applications using PHP and Node.js.
                Implementing secure and efficient APIs to facilitate smooth communication between frontend and backend.
                Database management with MySQL, ensuring data integrity and optimal performance.
              </p>
              <br />
              <ul>
                <li><b>NodeJS:</b> Building fast, scalable, and efficient server-side applications with NodeJS and Express.</li>
                <li><b>PHP:</b> Developing robust and scalable backend solutions with PHP for various web applications.</li>
                <li><b>MySQL:</b> Designing and managing databases using MySQL to ensure data integrity and performance.</li>
              </ul>
            </div>
          )}

          {activeService["desktop"] && (
            <div className="readMoreServices active">
              <i className="fa-solid fa-xmark" onClick={() => this.handleClick("desktop")}></i>
              <div className="readMoreServicesHeading">
                <h1>Desktop Applications:</h1>
              </div>
              <p>
                Developing desktop applications with graphical user interfaces (GUI) using Python's Tkinter library.
                Creating interactive and user-friendly software solutions tailored to specific needs.
                Implementing features like data visualization, form handling, and real-time updates in Tkinter-based applications.
              </p>
              <br />
              <ul>
                <li><b>Python Tkinter:</b> Creating user-friendly desktop applications with Python's Tkinter library, offering custom features and functionalities.</li>
              </ul>
            </div>
          )}

          {activeService["uiux"] && (
            <div className="readMoreServices active">
              <i className="fa-solid fa-xmark" onClick={() => this.handleClick("uiux")}></i>
              <div className="readMoreServicesHeading">
                <h1>UI/UX Design:</h1>
              </div>
              <p>
                Designing user interfaces that are both functional and aesthetically pleasing.
                Conducting user research and testing to ensure the best user experience.
                Creating wireframes, prototypes, and high-fidelity designs to effectively communicate ideas and workflows.
              </p>
              <br />
              <ul>
                <li><b>Figma:</b> Designing intuitive and engaging user interfaces with Figma, ensuring a seamless user experience.</li>
                <li><b>Canva:</b> Crafting visually appealing graphics and marketing materials using Canva, enhancing brand identity and communication.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Service;
