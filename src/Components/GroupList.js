import React, {Component } from 'react'
import Group from './Group'
//import { MdGrade } from 'react-icons/md';

class GroupList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groups: [
                //{id: 0, group: 'UNET Holon', points:20},
                //{id: 1, group: 'M. Tel-Aviv', points:18},
                //{id: 2, group: 'Hapoel Eilat', points:17}
            ]
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
                        <h5>{group.group}</h5>
                        <p>{group.points}</p>
                    </Group>
                </div>
            </div>
        )
    }

    add({ event = null, id = null, group = 'default group', points = 'default points' }) {
        console.log(event, id, group, points)
        this.setState(prevState => ({
          groups: [
            ...prevState.groups, {
              id: id !== null ? id : this.nextID(prevState.groups),
              group: group,
              point: points
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
                this.add({group: item.Name, points: item.points})))
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