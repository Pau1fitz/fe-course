import React, { Component } from 'react';
import CodeBox from './CodeBox/index.js';
import Header from './Header';
import Tabs from './Tabs';
import Result from './Result';
import Sidebar from './Sidebar';
import Information from './Information';


const sideBarItems = [
  {
    content: 'Variables',
    html: '<html>\n\t<p>Variables</p>\n</html>',
    css: '//code',
    js: 'var message = "Hello World";'
  },
  {
    content: 'Types',
    html: '<html>\n\t<p>Types</p>\n</html>',
    css: '//code',
    js: 'var name = "Paul Fitzgerald"; // String\nvar age = 24; // Number\nvar student = true; // Boolean\nvar cities = ["Toronto", "Paris", "London"] // Array\n// Object \nvar body = {\n\t"eyes": "brown",\n\t"height": 175, \n\t"hair": ["dark", "short"]\n}'
  },
  {
    content: 'Conditional',
    html: '<html>\n\t<p>Conditional Statements</p>\n</html>',
    css: '//code',
    js: 'var name = "Paul Fitzgerald"; // String\nvar age = 24; // Number\nvar student = true; // Boolean\nvar cities = ["Toronto", "Paris", "London"] // Array\n// Object \nvar body = {\n\t"eyes": "brown",\n\t"height": 175, \n\t"hair": ["dark", "short"]\n}\n\nif (student) {\n\talert(name + " is a student");\n}\n\nif (age < 18) {\n\talert(name + " is a minor");\n} else {\n\talert(name + " is an adult");\n}'
  },
  {
    content: 'Loops',
    html: '<html>\n\t<p>Loops</p>\n</html>',
    css: '//code',
    js: 'var name = "Peter"\nvar cities = ["Toronto", "Paris", "London"];\n\nalert(name + " has been to:");\n\ncities.forEach(function(city) {\n\talert(city);\n});\n'
  },
  {
    content: 'Referencing an Array or Object item',
    html: '<html>\n\t<p>Referencing an Array or Object item</p>\n</html>',
    css: '//code',
    js: 'var cities = ["Toronto", "Paris", "London"];\n\nvar body = {\n\t"eyes": "brown",\n\t"height": 175, \n\t"hair": ["dark", "short"]\n}\n\nalert("The first city is " + cities[0]);\n\nalert(name + " is " + body.height + "cm tall");'
  },
];

let currentSlideIndex = 0;

class App extends Component {

	constructor(props) {
		super(props);


		
		this.state = {
			currentView: 'js',
      htmlContent: sideBarItems[currentSlideIndex].html,
      cssContent: sideBarItems[currentSlideIndex].css,
      jsContent: sideBarItems[currentSlideIndex].js,
      currentSlideIndex: 0,
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
      htmlContent: sideBarItems[currentSlideIndex].html,
      cssContent: sideBarItems[currentSlideIndex].css,
      jsContent: sideBarItems[currentSlideIndex].js
    });

  }


	updateView(value) {

		this.setState({
			currentView: value
		});

	}

  updateHTML(content) {

    console.log(content)

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
        header: 'Conditional',
        content: '<div class="step-explanation"><p>Conditional statements are used to perform different actions based on different conditions.</p><p>In JavaScript we can use <span class="code">if/else</span> statements</p></div>'
      }, 
      {
        header: 'Loops',
        content: '<div class="step-explanation"><p>Loops can execute a block of code a number of times.</p><p> Loops are handy, if you want to run the same code over and over again, each time with a different value, which is often the case when working with arrays.</p></div>'
      },

      {
        header: 'Referencing an Array or Object item',
        content: '<div class="step-explanation"><p>If you want to access a specific element of an array, you can use the syntax <span class="code">cities[0]</span>, where 0 (zero) is the index of the element you want to access.</p><p>For an object, you can simply use the key: <span class="code">body.eyes</span> or <span class="code">body["eyes"]</span>.</p></div>'
      },
    ];

    return (
    	<div className="main">
	    	
        <Header />

        <div className="grid">

          <div className="col-1-15">

            <Sidebar updateCurrentSlideIndex={ this.updateCurrentSlideIndex } currentSlideIndex={ currentSlideIndex } sideBarItems={ sideBarItems} />
          
          </div>

          <div className="col-1-40">

            <Information information={ information } />

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

export default App;
