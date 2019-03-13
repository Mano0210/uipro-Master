import React, { Component } from 'react';

import Navbar from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import fire from './components/config/file'
import Forum from './components/forum'
import UI from './components/userpage/UserHomePage'
import './App.css';

import FrontPage from './FrontPage'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener()
  }



  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }


  render() {
    return (
      <div>
            {this.state.user ? (<UI />) : (<FrontPage />)}
      </div>
    );
  }
}

export default App;
