import React, { Component } from "react";
import { animateScroll as scroll} from 'react-scroll'


import Arrimg from '../../Images/up-arrow.png'
import './Angles.css';

class AngleTop extends Component {

    constructor() {
        super();
        this.scrollToTop = this.scrollToTop.bind(this);
      }


    scrollToTop() {
        scroll.scrollToTop();
      }

    render () {

        

        return (
            <div className = "Arrowsec">
                <img src= {Arrimg} alt="" className = "arrimg" onClick={this.scrollToTop} title = "Go to Top"/>
            </div>
        )
    }
}

export default AngleTop;