import React, { Component } from 'react';
import './Header.css'

class Header extends Component {


  render() {
    return (
    	<div className="Header">
  			<a className="logo" href="http://www.codeatuni.com/">
  				<img src="http://jgthms.com/js-course-syllabus/images/logo.png" alt="Code at Uni logo" />
  			</a>
  			<h1 className="title">Frontend JS Course Syllabus</h1>
  	  </div>
    )
  }
}

export default Header;
