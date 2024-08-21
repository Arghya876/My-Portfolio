import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';

export class TypeWritting extends Component {
  render() {
    return (
      <div >
        <p>
        <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 50,
          strings:  ['Frontend Developer', 'Backend Developer', 'Software Engineer', 'UI/UX Designer', 'AIML Enthusiast'],
          cursor:""
        }}/>
        </p>

        
      </div>
    )
  }
}

export default TypeWritting

