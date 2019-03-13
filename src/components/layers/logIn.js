import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/file'
import firebase from 'firebase'
import './logIn.css';

class logIn extends Component {

    constructor(props) {
        super(props);
        this.signin = this.signin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }



    signin(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    
    


render(){
  
    return (
        <div id="">
            <form>
                <input type="email" id="login" class="fadeIn second"
                    name="email" value={this.state.email} onChange={this.handleChange}
                    placeholder="Enter your Email here" /><br />
                <input type="password" id="password" class="fadeIn third"
                    name="password" value={this.state.password} onChange={this.handleChange}
                    placeholder="password" /> <br />
                <button type="submit" class="btn btn-secondary" onClick={this.signin}
                    value="" id="loginBtn">Login</button>
            </form>
        </div>
    )
}
}


export default logIn;