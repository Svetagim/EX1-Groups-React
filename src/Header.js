import React, {Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    active = {
        backgroundColor: "#212F3D",
        coloer: "white",
        fontWeight: "bold"
    }
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
    }
    render() {
        return(
            <div style={this.header}>
                <NavLink exact to="/" activeStyle={this.active}>
                 Home
             </NavLink>
             <NavLink to="/MyGroups" activeStyle={this.active}>
               My Groups
            </NavLink>
        </div>
        )}
}

export default Header