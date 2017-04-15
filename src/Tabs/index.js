import React, { Component } from 'react';
import './Tabs.css'

class Tabs extends Component {

  render() {
    return (
    	<div className="tabs">
  	  		
          <div onClick={()=> {this.props.updateView ('html')}} className="tab">
  	  			<p>HTML</p>
  	  		</div>
  	  		
          <div onClick={()=> {this.props.updateView ('css')}} className="tab">
  	  			<p>CSS</p>
  	  		</div>
  	  		
          <div onClick={()=> {this.props.updateView ('js')}} className="tab">
	  	  		<p>Javascript</p>
  	  		</div>

          <div onClick={()=> {this.props.updateView ('result')}} className="tab">
            <p>Result</p>
          </div>


  	  	</div>
    )
  }
}

export default Tabs;
