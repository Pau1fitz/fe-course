import React, { Component } from 'react';
import './Sidebar.css';


class SideBar extends Component {

    render() {

        const list = this.props.sideBarItems.map((item, index) => {
            const updateIndex = () => {
                this.props.updateCurrentSlideIndex(index)
            }
            return(
                <li onClick={ updateIndex } key={ index }>
                    <a href={item.id}>
                        <span className="number">{index + 1}</span> <span className="item-desc">{item.content}</span>
                    </a>
                </li>
  		    )
        });

        return (
            <div id="sidebar">
                <div className="sidebar-container">
                    <ul>
                        { list }
                    </ul>
                </div>
  	  		 </div>
         )
     }
}

export default SideBar;
