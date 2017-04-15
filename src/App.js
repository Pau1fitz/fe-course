import React, { Component } from 'react';
import CodeBox from './CodeBox/index.js';
import Header from './Header';
import Tabs from './Tabs';
import Result from './Result';
import Sidebar from './Sidebar';


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

    return (
    	<div>
	    	
        <Header />


    		<Tabs currentView={ currentView } updateView={this.updateView} />

        <div className="grid">

          <div className="col-1-2">

            <Sidebar sideBarItems={ sideBarItems} />
          
          </div>


          <div className="editor col-1-2">

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
