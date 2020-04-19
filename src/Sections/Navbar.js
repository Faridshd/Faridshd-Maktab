import React, { Component } from "react";
import { Link } from 'react-scroll';

import Title from './Title'

import "./Navbar.css";

class Navbar extends Component {       
    
    constructor (props) {
        super(props);
      }

  render() {    
    return (
        
      <div className = 'NavSec' dir = "rtl" style = {{
        backgroundColor : this.props.NavbarSec.NavColor
      }}>
          <ul>
              
              <li>
                  <a href = "" style = {{color : this.props.NavbarSec.Color}}>
                      <Link activeClass="active" to = "Title-Section" spy={true} smooth={true} duration={1200}>Home</Link>
                  </a>
                             
              </li>

              <li>
                  <a href = "" style = {{color : this.props.NavbarSec.Color}}>
                  <Link activeClass="active" to = "About-Section" spy={true} smooth={true} duration={1200}>About Me</Link>
                  </a>                  
              </li>

              <li>
                  <a href="" style = {{color : this.props.NavbarSec.Color}}>
                  <Link activeClass="active" to = "Skill-Section" spy={true} smooth={true} duration={1200}>My Skills</Link>
                  </a>                  
              </li>

              <li>
                  <a href="" style = {{color : this.props.NavbarSec.Color}}>
                      <Link activeClass="active" to = "Project-Section" spy={true} smooth={true} duration={1200} >My Project</Link>
                  </a>                  
              </li>              
              
          </ul>

          {/* <ul style = {{float : "left", width : "40%"}} dir = "ltr">

              <li>
                  <a href="" className = "Theme-changer" onClick = {() => this.ChangeColor()}>
                      change Theme
                  </a>                  
              </li>
          </ul> */}
      </div>

    );
  }
}



export default Navbar;
