import React, { Component } from "react";
import { Element } from 'react-scroll';
import data from "../Resumedata.json";

import AngleTop from "./Angles/AngleTop"


import "./MyProject.css";

class Project extends Component {
  render() {
    return (
      <Element name="Project-Section" className="element">
        <div className="ProjectSec">
          <div className="Tsec">
            <h1 className="text-center" style = {{color : this.props.ProjectSec.Color}}>{data.Sections[3].Title}</h1>
          </div>

          <div className="ConSec">
            <ul style = {{color : this.props.ProjectSec.Color}}>
              {Object.keys(data.Sections[3].Content).map((key) => {
                return <li>{data.Sections[3].Content[key].Title}</li>;
              })}
            </ul>
          </div>

          <AngleTop />
        </div>
      </Element>
    );
  }
}

export default Project;
