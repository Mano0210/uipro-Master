import React, { Component } from 'react';
import firebase, { firestore } from 'firebase'
import './Reports.css'

class Report extends Component {
    
    render() {
      
        return (
            <div id="reportTable">

                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card strpied-tabled-with-hover">
                                    <div class="card-header ">
                                        <h4 class="card-title" id="reportTitle">Reports</h4>
                                        <p class="card-category" id="reportline">reports from hell</p>
                                    </div>
                                    <div class="card-body table-full-width table-responsive">
                                        <table class="table table-hover table-striped">
                                            <thead>
                                                <tr><th>ID</th>
                                                    <th>Name</th>
                                                    <th>Salary</th>
                                                    <th>Country</th>
                                                    <th>City</th>
                                                </tr></thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>#name</td>
                                                    <td>####</td>
                                                    <td>####</td>
                                                    <td>####</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Report;