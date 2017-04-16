import React, { Component } from 'react';
import './Information.css';

class Information extends Component {

    render() {

        const list = this.props.information.map((item, index) => {
  	         return(
	             <li key={index}>
	                 <p className="header">
		                  <span className="number">{ index + 1 }</span>
					      <span className="info-title">{ item.header }</span>
				      </p>
				      <span dangerouslySetInnerHTML={{__html: item.content}} />
			      </li>
              )
  		});
    	return (
    		<div className="information">
    			<ul>
    				{ list }
    			</ul>
  	  		</div>
    	)
  	}
}

export default Information;
