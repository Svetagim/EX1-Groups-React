import React, {Component } from 'react'

class Group extends Component {
    render() {
        return (
            <div className= 'group'>
                <div> {this.props.children} </div>
            </div>
        )
    }
}

export default Group