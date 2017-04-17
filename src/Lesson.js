import React, { Component } from 'react';
import CodeBox from './CodeBox/index.js';
import Header from './Header';
import Tabs from './Tabs';
import Result from './Result';
import Sidebar from './Sidebar';
import Information from './Information';

//current solution
import jsBeautify from 'js-beautify';

let currentSlideIndex = 0;

class Lesson extends Component {

	constructor(props) {

		super(props);
		this.state = {
			currentView: 'js',
			htmlContent: props.route.sideBarItems[currentSlideIndex].html,
			cssContent: props.route.sideBarItems[currentSlideIndex].css,
			jsContent: props.route.sideBarItems[currentSlideIndex].js,
			currentSlideIndex: 0
		}

    	this.updateCurrentSlideIndex = this.updateCurrentSlideIndex.bind(this);
		this.updateView = this.updateView.bind(this);
	    this.updateHTML = this.updateHTML.bind(this);
	    this.updateCSS = this.updateCSS.bind(this);
	    this.updateJS = this.updateJS.bind(this);
	}

	updateCurrentSlideIndex(index) {

    	currentSlideIndex = index;

	    this.setState({
	     	currentSlideIndex: index,
	      	htmlContent: this.props.route.sideBarItems[currentSlideIndex].html,
	      	cssContent: this.props.route.sideBarItems[currentSlideIndex].css,
	      	jsContent: this.props.route.sideBarItems[currentSlideIndex].js
	    });
	}

	updateView(value) {
		this.setState({
			currentView: value
		});
	}

	updateHTML(content) {
		this.setState({
			htmlContent: content
    	});
	}

	updateCSS(content) {
    	this.setState({
      		cssContent: content
    	});
	}

	updateJS(content) {
    	this.setState({
      		jsContent: content
    	});
  	}

	render() {

  		const { currentView, htmlContent, cssContent, jsContent, currentSlideIndex } = this.state;

    	return (
    		<div className="main">
				<Header />
				<div className="grid">
	          		<div className="col-1-15">
	            		<Sidebar updateCurrentSlideIndex={ this.updateCurrentSlideIndex } currentSlideIndex={ currentSlideIndex } sideBarItems={ this.props.route.sideBarItems } />
	          		</div>
	          		<div className="col-1-40">
	            		<Information information={ this.props.route.information } />
	          		</div>
	          		<div id="editor" className="col-1-45">

	            		<Tabs currentView={ currentView } updateView={this.updateView} />

	            		<div style={{display: currentView === 'js' ? 'block' : 'none', height: '100%' }}>
	              			<CodeBox code={ jsContent } jsContent={ jsContent }  htmlContent={ htmlContent } cssContent={ cssContent } updateJS={ this.updateJS } mode="javascript" />
	            		</div>

	            		<div style={{display: currentView === 'css' ? 'block' : 'none', height: '100%' }}>
	              			<CodeBox htmlContent={ htmlContent }  cssContent={ cssContent } code={ cssContent } jsContent={ jsContent } updateCSS={ this.updateCSS } mode="css" />
	            		</div>

	            		<div style={{display: currentView === 'html' ? 'block' : 'none', height: '100%' }}>
	              			<CodeBox code={ htmlContent } htmlContent={ htmlContent }  cssContent={ cssContent } jsContent={ jsContent } updateHTML={ this.updateHTML } mode="text/html" />
	            		</div>

	            		<div style={{display: currentView === 'result' ? 'block' : 'none', height: '100%' }}>
	             			<Result />
	            		</div>
	          		</div>
        		</div>
  	  		</div>
		);
	}
}

export default Lesson;
