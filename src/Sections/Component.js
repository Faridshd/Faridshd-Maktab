import React, { Component } from "react";

import Skills from "./Skills";
import Title from "./Title";
import About from "./About";
import Navbar from "./Navbar";
import Project from "./MyProject";

import editimg from '../Images/pen.png'
import "./Component.css";

class component extends Component {

//    let id = 1;
//    let Titlecolor = "#595959";

    constructor() {
        super();  
        
        this.state = {
            id : 1,

            TitleSec : {
                Titlecolor : "#808080",
                color : "black"
            },

            NavbarSec : {
                NavColor : "#191a33",
                Color : "white"
            },

            AboutSec : {
                SecColor : "white",
                Color : "black"
            },

            SkillSec : {
                SecColor : "#ffcc80",
                Color : "black",
                SkillBoxColor : "black",
                HRcolor : "1px solid black",
            },

            ProjectSec : {
                Color : "white"
            }
        }

        this.Changetheme = this.Changetheme.bind(this);
    }

    Changetheme (id) {
        debugger;
        if (id === 1){
            this.setState({
                id : 2,

                TitleSec : {
                    Titlecolor : "#311e25",
                    color : "#db9a64"
                },                
                
                NavbarSec : {
                    NavColor : "#4d0026",
                    Color : "white"
                },

                AboutSec : {
                    SecColor : "#1a1a1a",
                    Color : "white"
                },

                SkillSec : {
                    SecColor : "#808080",
                    Color : "#4d94ff",
                    SkillBoxColor : "black",
                    HRcolor : "1px solid white",
                },

                ProjectSec : {
                    Color : "#ffff33"
                }

            })
        }
        else if (id === 2){
            this.setState({
                id : 1,
                TitleSec : {
                    Titlecolor : "#808080",
                    color : "black"
                },

                NavbarSec : {
                    NavColor : "#191a33",
                    Color : "white"
                },

                AboutSec : {
                    SecColor : "white",
                    Color : "black"
                },

                SkillSec : {
                    SecColor : "#ffcc80",
                    Color : "black",
                    SkillBoxColor : "black",
                    HRcolor : "1px solid black",
                },

                ProjectSec : {
                    Color : "white"
                }

            })
        }
    }

  render() {

    return (

          <div>
              <Navbar NavbarSec = {this.state.NavbarSec}/>
              <Title TitlesSec = {this.state.TitleSec}/>
              <About AboutSec = {this.state.AboutSec}/>
              <Skills SkillSec = {this.state.SkillSec}/>
              <Project ProjectSec = {this.state.ProjectSec}/>
              
              <div className = "changetheme" >
                  <img src = {editimg} alt="" className = "editimg"
                       onClick = {() => this.Changetheme(this.state.id)} title ="Change Theme"/>
              </div>
          </div>          
    );
  }
}

export default component
