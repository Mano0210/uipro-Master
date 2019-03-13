import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand } from 'react-bootstrap'
import { BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';
import fire from '../config/file'

import './sideBar.css'

class SideBar extends Component {

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this)
    }

        logout(){
            fire.auth().signOut();
        }



    render() {
        return (
            <div class="container-fluid" id="sideBack">
                <div class="sidenav">
                <div id="opacity">
                    <div ><h2 id="sidebarTitle">Easy Office Automation</h2></div>
                    <div id="userpageNav">
                        <NavLink to="user" id="userpageNavitems"><span id="sidenavIcons" class="far fa-user-circle fa-lg"></span>Profile</NavLink>
                        {/*<NavLink to="dashboard" id="userpageNavitems"><span class="fa fa-chart-line fa-lg"></span>Dash Board</NavLink>*/}
                        <NavLink to="/chatRoom" id="userpageNavitems"><span id="sidenavIcons" class="far fa-envelope-open fa-lg"></span>Chat</NavLink>
                        <NavLink to="reminders" id="userpageNavitems"><span id="sidenavIcons" class="far fa-sticky-note fa-lg"></span>Reminders</NavLink>
                        <NavLink to="report" id="userpageNavitems"><span class="far fa-file-alt fa-lg"></span>Reports</NavLink>
                        {/*<a href="#" id="userpageNavitems">Option 6</a>
                        <a href="#" id="userpageNavitems">Option 7</a>
                        <a href="#" id="userpageNavitems">Option 8</a>*/}
                    </div>
                    <div id="horLine"></div>
                    <button class="btn" onClick={this.logout}
                            id="sideBarLogOut">Log out</button>
                    
                </div>
               </div>
            </div>
        )
    }
}

export default SideBar;