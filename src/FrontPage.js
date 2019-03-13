import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import Navbar from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Forum from './components/forum'
import fire from './components/config/file'
import UI from './components/userpage/UserHomePage'



class FrontPage extends Component {
  render() {
    return (
      <div>
        
        <Navbar />
        <Home />
        <About />
        <Forum />
        <Contact />
        
        

      </div>
    );
  }
}

export default FrontPage;
