import React, { Component } from 'react';
import propic from './userPageImages/20180325_114618837_iOS.jpg'
import './editProfile.css'
import firebase from 'firebase'
import fire from '../config/file'

class editProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastNAme: '',
            Number: '',
            Email: '',

        }

    }
    refresh(e) {
        e.preventDefault()
    }
    firstname(firstname) {
        this.setState({
            FirstName: firstname,
        })
    }
    lastname(lastname) {
        this.setState({
            LastNAme: lastname,
        })
    }
    number(number) {
        this.setState({
            Number: number
        })
    }
    email(email) {
        this.setState({
            Email: email
        })
    }




    render() {

        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;
        if (user != null) {
            email = user.email;
            name = user.FirstName
        }
     

        return (
            <div class="row">
                <div class="col">
                    <div class="col-md-8">
                        <div class="card" id="editProfilebox">
                            <div class="card-header" >
                                <h4 class="card-title" id="editprofileTitle">Edit your profile</h4>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="row">
                                        <div class="col-md-5 pr-1">
                                            <div class="form-group">
                                                <label></label>
                                                <input type="text" class="form-control" placeholder="Company"  ></input>
                                            </div>
                                        </div>
                                        <div class="col-md-3 px-1">
                                            <div class="form-group">
                                                <label></label>
                                                <input type="tel" class="form-control" placeholder="Number"
                                                    onChange={(e) => this.number(e.target.value)}
                                                    value={this.state.Number}></input>
                                            </div>
                                        </div>
                                        <div class="col-md-4 pl-1">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1"></label>
                                                <input type="email" class="form-control" placeholder="Email"
                                                    onChange={(e) => this.email(e.target.value)}
                                                    value={email}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 pr-1">
                                            <div class="form-group">
                                                <label></label>
                                                <input type="text" class="form-control" placeholder="First Name"
                                                    onChange={(e) => this.firstname(e.target.value)}
                                                    value={name}></input>
                                            </div>
                                        </div>
                                        <div class="col-md-6 pl-1">
                                            <div class="form-group">
                                                <label></label>
                                                <input type="text" class="form-control" placeholder="Last Name"
                                                    onChange={(e) => this.lastname(e.target.value)}
                                                    value={this.state.LastNAme}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label></label>
                                                <input type="text" class="form-control" placeholder="Home Address" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 pr-1">
                                            <div class="form-group">
                                                <label></label>
                                                <input type="text" class="form-control" placeholder="City" />
                                            </div>
                                        </div>
                                        <div class="col-md-4 px-1">
                                            <div class="form-group">
                                                <label></label>
                                                <input type="text" class="form-control" placeholder="Country" />
                                            </div>
                                        </div>
                                        <div class="col-md-4 pl-1">
                                            <div class="form-group">
                                                <label></label>
                                                <input type="" class="form-control" placeholder="ZIP Code" />
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-info btn-fill pull-right">Update Profile</button>
                                    <div class="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="container">
                        <div class="card" id="card">
                            <div class="card">
                                <img src={propic} alt="Avatar" id="usercoverpic" />
                                <div class="container" id="userDetail">
                                    <h6>
                                        {this.state.FirstName}&nbsp;&nbsp;{this.state.LastNAme}
                                    </h6>
                                    {email}
                                    <br />
                                    {this.state.Number}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default editProfile;