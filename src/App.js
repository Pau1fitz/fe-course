import React, { Component } from 'react';
import CodeBox from './CodeBox/index.js';
import Header from './Header';
import Tabs from './Tabs';
import Result from './Result';

class App extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			currentView: 'html'
		}

		this.updateView = this.updateView.bind(this);
	}


	updateView(value) {

		this.setState({
			currentView: value
		});
	}

  render() {

  	const { currentView } = this.state;

    return (
    	<div>
	    	<Header />
    		<Tabs updateView={this.updateView} />

    		<div style={{display: currentView === 'js' ? 'block' : 'none' }}>
    			<CodeBox mode="javascript" /> 
    		</div>

    		<div style={{display: currentView === 'css' ? 'block' : 'none' }}>
				<CodeBox mode="css" /> 
    		</div>

    		<div style={{display: currentView === 'html' ? 'block' : 'none' }}>
				<CodeBox mode="text/html" /> 
    		</div>

    		<div style={{display: currentView === 'result' ? 'block' : 'none' }}>
				<Result /> 
    		</div>
  	  		
  	  	</div>
    )
  }
}

export default App;
