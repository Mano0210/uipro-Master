import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route, Link } from 'react-router-dom';
import{ Nav } from 'react-bootstrap'

import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'

import './Nav.css'

class Navbar extends Component {
    render() {
        return (
            <div id="NavBack">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"> <h2 id="navbarTitle">EOA</h2><h4 id="navbarCaption">Easy Office Automation</h4></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ml-auto" id="navPages">
                            <li class="nav-item active">
                                <a class="nav-link" href="#homeBack" id="navHome">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#aboutBack" id="navAbout">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contactBack" id="navContact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='#forumBack' id="navForum">Forum</a>
                            </li>
                           
                           
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar;