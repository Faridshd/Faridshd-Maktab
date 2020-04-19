import React, { Component } from "react";
import { Element } from "react-scroll";
import data from "../Resumedata.json";

import AngleDown from "./Angles/AngleDown";
import AngleTop from "./Angles/AngleTop";

import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <Element className = "element" name = "Skill-Section">
        <div className="Skillpage" style = {{ backgroundColor : this.props.SkillSec.SecColor}}>
          <h1 className="text-center" style = {{color : this.props.SkillSec.Color}}>{data.Sections[1].Title}</h1>
          <br />
          <hr className="Borderset" style = {{borderTop : this.props.SkillSec.HRcolor}}/>
          <div className="CardSec">
            {
            
            Object.keys(data.Sections[1].Content).map((key) => {
              return (
                <div>
                  <div className="Skillcard">
                    <img
                      src={data.Sections[1].Content[key].Image}
                      alt={data.Sections[1].Content[key].Title}
                      className="SkillImage center"
                    />
                    <br />
                    <br />
                    <br />
                    <h5 className="text-center Skilltitle">
                      {data.Sections[1].Content[key].Title}
                    </h5>
                  </div>
                </div>
              );
            })
            
            }
          </div>

          <AngleDown SecName = "Project-Section"/>
          <AngleTop />
          
        </div>
      </Element>
    );
  }
}

export default Skills;
