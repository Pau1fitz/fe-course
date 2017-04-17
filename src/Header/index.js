import React, { Component } from 'react';
import { Link } from 'react-router';
import './Header.css'

class Header extends Component {


  render() {
    return (
    	<div className="Header">
  			<a className="logo" href="http://www.codeatuni.com/">
  				<img src="http://jgthms.com/js-course-syllabus/images/logo.png" alt="Code at Uni logo" />
  			</a>
  			<h1 className="title">Frontend JS Course Syllabus</h1>

            <div className="lessons">
                <Link to='/intro' activeClassName="active">
                    <p>Intro</p>
                </Link>

                <Link to='/lesson-one' activeClassName="active">
                    <p>Lesson One</p>
                </Link>

                <Link to='/lesson-two' activeClassName="active">
                    <p>Lesson Two</p>
                </Link>
            </div>
  	  </div>
    )
  }
}

export default Header;
