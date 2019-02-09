import React, {Component } from 'react'
import { NavLink } from 'react-router-dom'
const path = window.location.pathname

class Header extends Component {
    active = {
        backgroundColor: "#212F3D",
        color: "white",
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
                <NavLink exact to={`${path}`} activeStyle={this.active}>
                 Home
             </NavLink>

             <NavLink to={`${path}ScoreAndWins`} activeStyle={this.active}>
            Scores and Wins
            </NavLink>

             <NavLink to={`${path}UpdateScore`} activeStyle={this.active}>
             Update Score
            </NavLink>

        </div>
        )}
}

export default Header