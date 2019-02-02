import React, {Component } from 'react'
import { MdSave } from 'react-icons/md'
import { MdEdit } from 'react-icons/md'

class Group extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this)
        this.save = this.save.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderUI = this.renderUI.bind(this)
    }
    edit() {
        this.setState({
            editing: true
        })
    }
    save() {
        this.setState({
            editing: false
        })
    }
    renderForm(){
        return(
            <div>
                <form action="https://ex1-groups.herokuapp.com/setscore" method="post">
                    <p>Group name:</p>
                    <input type="text" name="Name"></input>
                    <p>Group Score:</p>
                    <input type="text" name="Points"></input>
                    <button onClick={this.save} className="btn btn-primary" style={{marginRight: 7+'px'}}><MdSave/></button>
                </form>
            </div>
        )
    }
    renderUI() {
        return (
            <div className= 'group'>
                <div> {this.props.children} </div>
                <span>
                    <button onClick={this.edit} className="btn btn-primary" style={{marginRight: 7+'px'}}><MdEdit/></button>
                </span>
            </div>
        )
    }
    render() {
        return this.state.editing ? this.renderForm() : this.renderUI()
    }
}

export default Group