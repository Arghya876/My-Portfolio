import React, { Component } from 'react';
import {Link} from "react-scroll";
import "./NavBar.css"; 

let Logo = {
    color: "red",
    fontWeight: "bold"
};


export class NavBar extends Component {
    state = {clicked:true};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    render() {
        return (
            <nav className='navigationBar'>
                <h1 className='logoStyle' style={{ color: "white",  }}>My <span style={Logo}>Portfolio</span></h1>

                <div className='leftPart'>
                    <div className='hamManu' onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-bars' : 'fas fa-times'} ></i>

                    </div>
                    <div className={this.state.clicked ?  'menu active' : 'menu'}>


                        <div className="manuTitel">
                            <h1>MENU</h1>
                        </div>
                        <hr />

                        <ul className='menuItems'>
                            <div className='manuItem'>
                                <li><Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='a_c' onClick={this.handleClick}>Home</Link></li>
                            </div>
                            <div className='manuItem'>
                                <li><Link activeClass='active' to='about' spy={true} smooth={true} offset={40} duration={500} className='a_c'  onClick={this.handleClick}>About</Link></li>
                            </div>
                            <div className='manuItem'>
                                <li><Link activeClass='active' to='service' spy={true} smooth={true} offset={40} duration={500} className='a_c' onClick={this.handleClick}>Service</Link></li>
                            </div>
                            <div className='manuItem'>
                                <li><Link activeClass='active' to='skill' spy={true} smooth={true} offset={40} duration={500} className='a_c'  onClick={this.handleClick}>Skill</Link></li>
                            </div>
                            <div className='manuItem'>
                                <li><Link activeClass='active' to='project' spy={true} smooth={true} offset={45} duration={500} className='a_c'  onClick={this.handleClick}>Projects</Link></li>
                            </div>
                            <div className='manuItem'>
                                <li><Link activeClass='active' to='contact' spy={true} smooth={true} offset={50} duration={500} className='a_c'  onClick={this.handleClick}>Contact</Link></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
