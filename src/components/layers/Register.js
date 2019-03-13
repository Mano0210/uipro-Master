import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import fire from '../config/file'

import './Register.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',
        }
        
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            console.log(error)
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }



    render() {

        var fname = document.getElementById("firstname")
        var database = fire.database();
        var ref = firebase.database().ref('UserData');
       
       

        return (
            <div>
                <div class="signupForm">
                    <div class="signup-form">
                        <form onSubmit={this.handleChange}>
                            <p class="hint-text" id="signupText">Create your account. It's free and only takes a minute.</p>
                            <div class="form-group">
                                <input type="text" class="form-control" id="firstname"
                                       name="first_name" placeholder="First Name" onChange={this.handleChange} required="required" id="signupFname" />
                            </div>
                            <div class="form-group">
                                <div>
                                    <input type="text" class="form-control lname"
                                        name="last_name" placeholder="Last Name" onChange={this.handleChange} required="required" id="signupLname" />
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="email"
                                    name="email" value={this.state.email} onChange={this.handleChange}
                                    placeholder="Email" required="required" id="signupEmail" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control"
                                    name="password" value={this.state.password} onChange={this.handleChange}
                                    placeholder="Password" required="required" pattern=".{8,}" id="signupPassword" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="confirm_password"
                                    name="password"
                                    placeholder="Confirm Password" required="required" pattern=".{8,}" id="signupRepassword" />
                            </div>
                            <div class="form-group">
                                <label class="checkbox-inline" ><input type="checkbox" required="required" /> I accept the <a class="terms" href="#" id="terms">Terms of Use</a> &amp; <a class="policy" href="#" id="policy">Privacy Policy</a></label>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn1 btn" onClick={this.signup}
                                    id="registerButton">Register Now</button>
                            </div>
                        </form>
                    </div>
                </div></div>
        )
    }
}

export default Register;