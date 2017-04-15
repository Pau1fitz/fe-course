import React, { Component } from 'react';
import './Header.css'

class Header extends Component {


  render() {
    return (
    	<div className="header">
  			<a className="logo" href="http://jgthms.com/js-course-syllabus">
  				<img src="http://jgthms.com/js-course-syllabus/images/logo.png" alt="Code at Uni logo" />
  			</a>
  			<h1 className="title">Frontend JS Course Syllabus</h1>
  	  </div>
    )
  }
}

export default Header;
