import React, { Component } from 'react';
import OfficeVec from '../Images/OfficrVec.png'

import Login from '../components/layers/logIn.js'
import Register from '../components/layers/Register.js';
import UI from '../components/userpage/UserHomePage'
import fire from './config/file'

import './Home.css'

class Home extends Component {
   

    render() {
        return (
            <div id="homeBack">
            
                <div class="container" >
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="" id="homeCaption">
                                <h1 id="title">E<span id="titleSmall">asy</span>O<span id="titleSmall">ffice</span>A<span id="titleSmall">utomation</span></h1>
                                {/*<div id="titleLine"></div>*/}
                                <h2 id="all">Easy Office Automation is a programme that contains a set of calendar, memos,
                                reminders, and basic office setting.<br /> It is aimed for business and student users.</h2>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#loginModal" id="signinBtn">
                                            Login
                                        </button>

                                        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div id="modalbox">
                                                        <div class="modal-header">
                                                            <h5 class="" id="loginModalTitle"><strong>Login</strong></h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body" id="modalTexts">
                                                            <Login />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*sigupmodel */}
                                    <div class="col-sm-6">
                                        <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#signupModal" id="signupBtn">SignUp</button>

                                        <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div id="modalbox">
                                                        <div class="modal-header">
                                                            <h5 class="" id="signupModalTitle"><strong>Register</strong></h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body" id="modalTexts">
                                                            <Register />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>





                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <figure class="figure" id="officeFigure">
                                <img src={OfficeVec} id="officeImage" class="" alt="A generic square placeholder image with rounded corners in a figure."></img>
                            </figure>

                        </div>
                    </div>
                </div>






            </div>
        )
    }
}

export default Home;