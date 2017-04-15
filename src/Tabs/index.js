import React, { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {

  render() {
    return (
    	<div className="tab-container">

        <div className={this.props.currentView === 'html' ? 'tab active' : 'tab'} onClick={()=> {this.props.updateView ('html')}}>
          <p>HTML</p>
        </div>
        
        <div className={this.props.currentView === 'css' ? 'tab active' : 'tab'}  onClick={()=> {this.props.updateView ('css')}}>
          <p>CSS</p>
        </div>
        
        <div className={this.props.currentView === 'js' ? 'tab active' : 'tab'}  onClick={()=> {this.props.updateView ('js')}}>
          <p>Javascript</p>
        </div>

        <div className={this.props.currentView === 'result' ? 'tab active' : 'tab'}  onClick={()=> {this.props.updateView ('result')}}>
          <p>Result</p>
        </div>

  	  </div>
    )
  }
}

export default Tabs;
