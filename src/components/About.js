import React, { Component } from 'react'
import Root from '../Images/vvv.png'

import Connection from '../Images/Connection.png'
import Support from '../Images/support.png'
import Pricing from '../Images/Money.png'
import './About.css'

class About extends Component {
    render() {
        return (
            <div id="aboutBack">

                <div class="row" id="">
                    <div class="" id="aboutFigure">
                        <figure class="figure">
                            <img src={Root} class="" alt="A generic square placeholder image with rounded corners in a figure." id="aboutImg" />
                            <figcaption class="figure-caption"></figcaption>
                        </figure>
                    </div>

                    <div class="" id="aboutText">
                        <h2 id="aboutHeader">Our Goal</h2>

                        <div class="" id="connectionBox">
                            <img src={Connection} id="connectionImg" />
                            <p>Fast and immidiate message send, <br />imformation procesing</p>
                        </div>
                        <div id="borderLine"></div>
                        <div class="" id="priceBox">
                            <img src={Pricing} id="pricingImg" />
                            <p>If you are our regular customer, <br />for you we gaurantee many discounts and bonuses</p>
                        </div>
                        <div id="borderLine"></div>

                        <div class="" id="supportBox">
                            <img src={Support} id="supportImg" />
                            <p>If you have any problem with app,<br /> we are always ready to help!</p>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default About;