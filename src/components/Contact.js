import React, { Component } from 'react';

import './Contact.css'
import ContactForm from './layers/ContactForm';

class Contact extends Component {
    render() {
        return (
            <div id="contactBack">
                <h2 id="contactTitle">Get in Touch</h2>
                <div id="contactPad" >
                    <div class="container" >
                        <div class="row">
                            <div class="col-sm-6">
                                <div id="address">
                                    <address>
                                        <strong>Easy Office Automation</strong><br />
                                        Joukahaisenkatu 3<br />
                                        20520,Turku<br />
                                        Finland <br />
                                        <abbr title="Phone">P:</abbr> (+358) 10 3153017
                                    </address>
                                </div>
                                <div id="verLine"></div>
                            </div>
                            <div class="col-sm-6" id="rightSide">
                                <ContactForm />
                            </div>
                             
                            <div class="mapouter">
                                <div class="gmap_canvas">
                                    <iframe id="addMap"src="https://maps.google.com/maps?q=turku%20amk%20ict&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;