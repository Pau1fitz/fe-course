import React, { Component } from 'react';
import './Sidebar.css';


class SideBar extends Component {

  	render() {

  		const list = this.props.sideBarItems.map((item, index) => {
  			return(
  				<li key={ index }><span className="number">{index + 1}</span> <span className="item-desc">{item.content}</span></li>
  			)
  		});
    	return (
    		<div className="sidebar">
  	  		
    			<ul>
    				{ list }
    			</ul>

  	  		</div>
    	)
  	}
}

export default SideBar;
