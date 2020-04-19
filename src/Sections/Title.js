import React, { Component } from "react";
import data from "../Resumedata.json";
import { Element, Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";

import AngleDwon from "../Sections/Angles/AngleDown"

import Titleimg from "../Images/HomeTitle.png";
import "./Title.css";

class Title extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <Element className = "element" name = "Title-Section">
        <div className="Fullpage FirstSec" 
             style = {{
               backgroundColor : this.props.TitlesSec.Titlecolor,
               color : this.props.TitlesSec.color
             }}
        >
          <div className="BioSec">

            <h1>{data.Title}</h1>
            <h2 className ="text-center">{data.Subtitle}</h2>
            <h3>{data.Greeting}</h3>

            <div className="Btnsec">

              <button className="btn Aboutbtn">                  
                      <Link activeClass="active" to = "About-Section" spy={true} smooth={true} duration={1200}>About Me</Link>                  
              </button>

              <button className="btn Skillbtn">
                  <Link activeClass="active" to = "Skill-Section" spy={true} smooth={true} duration={1200}>My Skills</Link>
              </button>

              <button className="btn Contactbtn">
                  <Link activeClass="active" to = "Project-Section" spy={true} smooth={true} duration={1200} >My project</Link>
              </button>

            </div>

            <div className="SocialSec">
              
              {Object.keys(data.Sections[2].Content).map((key) => {
                return (
                  <div>
                    <SocialIcon
                      url={data.Sections[2].Content[key].Link}
                      bgColor="#0080ff"
                      fgColor="white"
                    />
                  </div>
                );
              })}
            </div>

          </div>

          <div className="ImageSec">
            <img src={Titleimg} alt="" />
          </div>

          <AngleDwon SecName = "About-Section"/>

        </div>
      </Element>
    );
  }
}

export default Title;
