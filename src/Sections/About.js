import React, { Component } from "react";
import data from "../Resumedata.json";
import { Element } from "react-scroll";

import AngleTop from "./Angles/AngleTop";
import AngleDown from "./Angles/AngleDown";

import Aboutimg from "../Images/About.jpg";
import "./About.css";

class About extends Component {
  render() {
    return (
      <Element className = "element" name = "About-Section">
        <div className="Fullpage2 SecondSec" style = {{backgroundColor : this.props.AboutSec.SecColor}}>

          <div className="ImageSec2">
            <img src={Aboutimg} alt="" />
          </div>

          <div className="AboutSec text-center" style = {{color : this.props.AboutSec.Color}}>
            <h2> {data.Sections[0].Title} </h2>
            <p> {data.Sections[0].Content} </p>
          </div>
          
          <AngleDown SecName = "Skill-Section"/>
          <AngleTop />

        </div>
        
      </Element>
    );
  }
}

export default About;
