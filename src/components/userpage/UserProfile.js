import React, { Component } from 'react';

import EditProfile from './editProfile'

import './UserProfile.css'

class UserProfile extends Component {
    render() {
        return (
            <div class="container-fluid" id="userPRofileback">
                <div class="row">
                    <div class="col"><EditProfile /></div>
                    
                </div>
            </div>
        )
    }
}

export default UserProfile;