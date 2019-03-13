import React, { Component } from 'react';
import { defaultCipherList } from 'constants';
import PropTypes from 'prop-types'

import firebase from 'firebase'
import fire from '..//config/file'

import './ContactForm.css'


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email : '',
            Message: ''
        }
    }

    contactUs(name , email , message) {
        this.setState({
            Name: name,
            Email: email,
            Message : message,
     });
     var database = fire.database();
           var ref = database.ref('Contact');
   
           var data = {
               Name: name,
               Email: email,
               Message : message
           }
           ref.push(data);
           ref.on('value' , gotData , errData);
   
           function gotData(data){
               var Contact = data.val();
   
           }
           function errData(data){
   
           }
         
    }

        
        
      
   

      render() {
        return (
            <div id="ContactForm">
                <div class="container">
                    <div class="wrap-contact2">
                        <form class="contact2-form validate-form" id="form">
                           
                            <div class="wrap-input2 validate-input" data-validate="Name is required">
                                <input class="input2" type="text" name="name" 
                                       id="nameInput" placeholder="Name"   onChange={(e) => this.contactUs(e.target.value)}
                                       value={this.state.name}/>
                                <span class="focus-input2" data-placeholder="NAME"></span>
                            </div>
                            <div class="wrap-input2 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input class="input2" type="email" name="email" 
                                       id="emailInput"  placeholder="Email" onChange={(e) => this.contactUs(e.target.value)}
                                       value={this.state.email} />
                                <span class="focus-input2" data-placeholder="EMAIL"></span>
                            </div>
                            <div class="wrap-input2 validate-input" data-validate="Message is required">
                                <textarea class="input2" name="message" 
                                          id="messageInput"  placeholder="Your Message.." onChange={(e) => this.contactUs(e.target.value)}
                                          value={this.state.message} ></textarea>
                                <span class="focus-input2" data-placeholder="MESSAGE"></span>
                            </div>
                            <div class="container-contact2-form-btn">
                                <div class="wrap-contact2-form-btn">
                                     <button class=" btn" id="sendButton" type="submit">
                                        Send Your Message
                                     </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    

}

export default ContactForm;