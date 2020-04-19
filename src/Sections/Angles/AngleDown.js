import React, { Component } from "react";
import { Link } from 'react-scroll'

import Arrimg from '../../Images/arrow.png'
import './Angles.css';

class AngleDown extends Component {
    render () {
        return (

            <div className = "Arrowsec">

                <Link activeClass="active" to= {this.props.SecName} spy={true} smooth={true} duration={500} >
                    <img src= {Arrimg} alt="" className = "arrimg"  title = "Go to Next Section"/>
                </Link>

            </div>
        )
    }
}

export default AngleDown;