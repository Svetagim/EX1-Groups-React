import React, {Component } from 'react'
import Group from './Group'

class GroupList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groups: []
        }
        this.eachGroup = this.eachGroup.bind(this)
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
    }
    eachGroup(group, i) {
        return (
            <div key={`container${i}`} className="card" style={{width: 18 + 'rem', marginBottom: 7 + 'px'}}>
                <div className="card-body">
                    <Group key={`group${i}`} index={i}>
                        <h3>{group.group}</h3>
                        <h5>Points: {group.points}</h5>
                        <h6>Number of Wins: {group.wins}</h6>
                        <h6>Number of Losses: {group.losses}</h6>
                        <h6>Coach: {group.coach}</h6>
                    </Group>
                </div>
            </div>
        )
    }

    add({ event = null, id = null, group = 'default group', points = 'default points', wins = 'default', losses = 'default', coach = 'default', players = 'default'}) {
        this.setState(prevState => ({
          groups: [
            ...prevState.groups, {
              id: id !== null ? id : this.nextID(prevState.groups),
              group: group,
              points: points,
              wins: wins,
              losses: losses,
              coach: coach,
              players: players
            }]
        }))
    }

    nextID(groups = []) {
        let max = groups.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0)
        return ++max
      }

    componentDidMount() {
        const url = 'https://ex1-groups.herokuapp.com/allgroups';
        fetch(url)
            .then(res => res.json())
            .then(data => data.map(item =>
                this.add({group: item.Name, 
                        points: item.Points, 
                        wins: item.W, 
                        losses: item.L,
                        coach: item.Coach ,
                        players: item.Players
                    })))
            .catch(err => console.error(err));
    }
    render() {
        return(
            <div className = "groupList">
                { this.state.groups.map(this.eachGroup)}
            </div>
        )
    }
}

export default GroupList