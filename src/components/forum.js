import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavbarBrand , Button} from 'react-bootstrap'
import { BrowserRouter as Router, NavLink, Switch, Route, } from 'react-router-dom';
import { Link } from 'react-bootstrap'
import './forum.css'


import Forumimg from '../Images/66063.png'
import forumIcon from '../Images/educational-forum-platform.png'

export default class forum extends Component {
  render() {
    return (

      <div class="container-fluid" id="forumBack">
        <div class="" id="forumtext">
          <h2 id="forumHeader">EOA Forum</h2>

          <div id="forumBox">
            <p id="forumdetail">
              EOA Forum is a community where users <br />can post any questions or answers <br />to other users questions.<br />
              Our form allows both registered and <br /> guest users to post questions.
           </p>
          </div>
          <div>
            <button id="forumGetStartedbtn"  class="btn">Get Started</button>

          </div>

        </div>
        <div id="forumFigure">
          <figure class="figure">
            <img src={Forumimg} id="forumimg"></img>
          </figure>
        </div>

      </div>

    )
  }
}
