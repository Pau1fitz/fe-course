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
        content: 'Create an HTML Page'
      },
      {
        content: 'Create a JS file'
      },
      {
        content: 'Variables'
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
        header: 'Create an HTML Page',
        content: '<div class="step-explanation"><p>In order to use JavaScript in our browser, we need to include it in an HTML page.<p></div>'
      },
      {
        header: 'Create a JavaScript file',
        content: '<div class="step-explanation"><p>Let’s see if we included our file correctly.</p><p>In the same folder, let’s create a file called <span class="code">scripts.js</span> in which we call a simple function.</p></div>'
      },
      {
        header: 'Variables',
        content: '<div class="step-explanation"><p>A variable is a named element that can contain a value.<p><p>Instead of typing "hello world" directly, let’s assign that value to a variable called message.</p></div>'
      },
      {
        header: 'Types',
        content: '<div class="step-explanation"><p>There are different types of variables in JavaScript. Each of them has different capabilities.</p></div>'
      },
    ];

    return (
    	<div className="main">
	    	
        <Header />


    		<Tabs currentView={ currentView } updateView={this.updateView} />

        <div className="grid">

          <div className="col-1-15">

            <Sidebar sideBarItems={ sideBarItems} />
          
          </div>

          <div className="col-1-40">

            <Information information={ information } />

          </div>

 


          <div className="editor col-1-45">

            <div style={{display: currentView === 'js' ? 'block' : 'none' }}>
              <CodeBox code={ jsContent }  htmlContent={ htmlContent } cssContent={ cssContent } updateJS={ this.updateJS } mode="javascript" /> 
            </div>

            <div style={{display: currentView === 'css' ? 'block' : 'none' }}>
              <CodeBox htmlContent={ htmlContent }  cssContent={ cssContent } code={ cssContent } jsContent={ jsContent } updateCSS={ this.updateCSS } mode="css" /> 
            </div>

            <div style={{display: currentView === 'html' ? 'block' : 'none' }}>
              <CodeBox code={ htmlContent } htmlContent={ htmlContent }  cssContent={ cssContent } jsContent={ jsContent } updateHTML={ this.updateHTML } mode="text/html" /> 
            </div>

            <div style={{display: currentView === 'result' ? 'block' : 'none' }}>
              <Result /> 
            </div>
          
          </div>

        </div>
        

        

  	  </div>
    );
  }
}

export default App;
