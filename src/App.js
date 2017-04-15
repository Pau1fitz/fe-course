import React, { Component } from 'react';
import CodeBox from './CodeBox/index.js';
import Header from './Header';
import Tabs from './Tabs';
import Result from './Result';

class App extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			currentView: 'html',
      htmlContent: '//code',
      cssContent: '//code',
      jsContent: '//code'
		}

		this.updateView = this.updateView.bind(this);
    this.updateHTML = this.updateHTML.bind(this);
    this.updateCSS = this.updateCSS.bind(this);
    this.updateJS = this.updateJS.bind(this); 
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

  	const { currentView, htmlContent, cssContent, jsContent } = this.state;

    return (
    	<div>
	    	<Header />
    		<Tabs updateView={this.updateView} />

    		<div style={{display: currentView === 'js' ? 'block' : 'none' }}>
    			<CodeBox htmlContent={ htmlContent } updateJS={ this.updateJS } code={ jsContent } mode="javascript" /> 
    		</div>

    		<div style={{display: currentView === 'css' ? 'block' : 'none' }}>
				  <CodeBox code={ cssContent } updateCSS={ this.updateCSS } mode="css" /> 
    		</div>

    		<div style={{display: currentView === 'html' ? 'block' : 'none' }}>
				  <CodeBox code={ htmlContent } updateHTML={ this.updateHTML } mode="text/html" /> 
    		</div>

    		<div style={{display: currentView === 'result' ? 'block' : 'none' }}>
				  <Result /> 
    		</div>
  	  		
  	  	</div>
    )
  }
}

export default App;
