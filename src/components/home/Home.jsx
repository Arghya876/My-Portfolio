import React, { Component } from 'react';
import NavBar from '../../components/navbar/NavBar';
import './Home.css';
import TypeWritting from './TypeWritting';
import profile from '../images/laptop_pic.jpeg';
import Hometextanima from './Hometextanima.jsx';

class Home extends Component {
  render() {
    return (
      <section id='home' className='homeSection'>
        <div className='mainNavBar'>
            <NavBar/>
        </div>
        <div className="homeBody">
        <div className='leftHome'>
          <img className='profilePicRespon' src={profile} alt="Profile Pic" />
          <h6 className='homeHello'>Hello! I'm</h6>

          <h1 className='homeMyName'>Arghya <br /> Bhattacharjee</h1>
          <h1 className='homeMyNameRespon'>Arghya Bhattacharjee</h1>

          <div className='typeWrittingAnima'>
            <p>and I'm a&nbsp;</p>
            <div style={{color:'#00FFE0'}}>
              <TypeWritting/>
            </div>
          </div>

          <p className='homeMySkills'>
            <b>Languages:</b> JAVA, Python and JavaScript <br />
            <b>Backend:</b> php and Node Js <br />
            <b>Database:</b> MySQL and MongoDB <br />
            <b>UI/UX:</b> Figma and Canva
          </p>

          <div className='homeLeftButton'>
             <button onClick={() =>{
              document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
             }}>Contact</button>
          </div>  
        </div>

        <div className="rightHome">
          <img className='profilePic' src={profile} alt="Profile Pic" />
          <div className="rightTextAnima">
            <Hometextanima/>
          </div>
          <div className='homeLeftButtonRespon'>
             <button onClick={() =>{
              document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
             }}>Contact</button>
          </div>
        </div>
        </div>

      </section>
    );
  }
}

export default Home;
