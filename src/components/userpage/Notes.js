import React, { Component } from 'react'
import { defaultCipherList } from 'constants';
import PropTypes from 'prop-types'

import firebase from 'firebase'
import fire from '..//config/file'


import './Note.css'

class Notes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            lists: [],
        }
    }

    changeUserInput(input) {
        this.setState({
            userInput: input
        })
    }

    addToList(input) {
        let listArray = this.state.lists;

        listArray.push(input);

        this.setState({
            list: listArray,
            userInput: ''
        })
    
        
        var database = fire.database();
        var ref = database.ref('notes');

        var data = {
            notes: input,
            ok: ''
        }
        ref.push(data);
        ref.on('value' , gotData , errData);

        function gotData(data){
            var Notes = data.val();

        }
        function errData(data){

        }
    }
    delNotes = (index , e) =>{
        const lists = Object.assign([]  ,this.state.lists);
        lists.splice(index ,1 );
        this.setState({lists})
    }


    render() {
        return (
            <div className="to-do-list-main" id="noteBack">
                <div class="card-header ">
                    <h4 class="card-title" id="notesTitle">Notes</h4>
                </div>
                <input id="noteInput"
                    onChange={(e) => this.changeUserInput(e.target.value)}
                    value={this.state.userInput}
                    type='text' />
                <button onClick={() => this.addToList(this.state.userInput)} id="notebtn">Add</button>

                <div class="card-body table-full-width table-responsive">
                    <table class="table table-hover table-striped">
                        <tbody>
                            {this.state.lists.map((val) => <tr id="tableNotes">{val} &nbsp;
                            <a href="#" onClick={this.delNotes.bind(this)} ><i class="far fa-trash-alt"></i> </a></tr>)}
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}


export default Notes

