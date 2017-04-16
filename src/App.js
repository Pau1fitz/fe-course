import React, { Component } from 'react';
import CodeBox from './CodeBox/index.js';
import Header from './Header';
import Tabs from './Tabs';
import Result from './Result';
import Sidebar from './Sidebar';
import Information from './Information';


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

    const sideBarItems = [
      {
        content: 'Variables',
      },
      {
        content: 'Types'
      },
      {
        content: 'Referencing an Array or Object item'
      },
      {
        content: 'Conditional'
      },
      {
        content: 'Loops'
      }
    ];


    const information = [
      {
        header: 'Variables',
        content: '<div class="step-explanation"><p>A variable is a named element that can contain a value.<p></div>'
      },
      {
        header: 'Types',
        content: '<div class="step-explanation"><p>There are different types of variables in JavaScript. Each of them has different capabilities.</p></div>'
      },
      {
        header: 'Referencing an Array or Object item',
        content: '<div class="step-explanation"><p>If you want to access a specific element of an array, you can use the syntax cities[0], where 0 (zero) is the index of the element you want to access.</p><p>For an object, you can simply use the key: body.eyes or body["eyes"].</p></div>'
      },
      {
        header: 'Conditional',
        content: '<div class="step-explanation"><p>Conditional statements are used to perform different actions based on different conditions.</p><p>In JavaScript we have the following conditional statements:</p><ul><li>Use if to specify a block of code to be executed, if a specified condition is true</li><li>Use else to specify a block of code to be executed, if the same condition is false</li><li>Use else if to specify a new condition to test, if the first condition is false</li><li>Use switch to specify many alternative blocks of code to be executed</li></ul></div>'
      }
    ];

    return (
    	<div className="main">
	    	
        <Header />

        <div className="grid">

          <div className="col-1-15">

            <Sidebar sideBarItems={ sideBarItems} />
          
          </div>

          <div className="col-1-40">

            <Information information={ information } />

          </div>

 


          <div id="editor" className="col-1-45">

            <Tabs currentView={ currentView } updateView={this.updateView} />

            <div style={{display: currentView === 'js' ? 'block' : 'none', height: '100%' }}>
              <CodeBox code={ jsContent }  htmlContent={ htmlContent } cssContent={ cssContent } updateJS={ this.updateJS } mode="javascript" /> 
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

export default App;
