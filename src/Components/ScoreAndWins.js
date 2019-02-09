import React, {Component } from 'react'
import Group from './Group'
import { MdSearch } from 'react-icons/md'

class ScoreAndWins extends Component {
    constructor(props)
    {
        super(props)
        this.state = { 
                points:"", 
                wins:"",
                groups: [],
                before: true
                }
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderUI = this.renderUI.bind(this)
        this.eachGroup = this.eachGroup.bind(this)
    }

    handleSubmit(event){ 
        this.state.groups=[];
        event.preventDefault();
        let formBody = [];
        for (var property in this.state) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(this.state[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }       
        formBody = formBody.join("&");

        console.log(formBody)
        const url = 'https://ex1-groups.herokuapp.com/scoresandwins';
        
        fetch(url, {
         method: 'POST',
         headers: {
             'Accept': 'application/json',
             'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
            },
         body: formBody
         })
         .then(res => res.json())
         .then(data => data.map(item => 
             this.add({group: item.Name, 
                     points: item.Points, 
                     wins: item.W, 
                     losses: item.L,
                     coach: item.Coach ,
                     players: item.Players
                 }, 
                 this.state.before=false)))
         .catch(err => console.error(err));
       };

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
    renderForm(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Points:</p>
                    <input placeholder="points" type="text" name="points" onChange={(ev)=>this.setState({points:ev.target.value})}/>
                    <p>Wins:</p>
                    <input placeholder="wins" type="text" name="wins" onChange={(ev)=>this.setState({wins:ev.target.value})}/>
                    <br></br>
                    <button type = "submit" className="btn btn-primary" style={{marginRight: 7+'px'}}><MdSearch/></button>
                </form>
            </div>
        )
    }

    renderUI(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Points:</p>
                    <input placeholder="points" type="text" name="points" onChange={(ev)=>this.setState({points:ev.target.value})}/>
                    <p>Wins:</p>
                    <input placeholder="wins" type="text" name="wins" onChange={(ev)=>this.setState({wins:ev.target.value})}/>
                    <br></br>
                    <button type = "submit" className="btn btn-primary" style={{marginRight: 7+'px'}}><MdSearch/></button>
                </form>
                <div className = "groupList">
                { this.state.groups.map(this.eachGroup)}
            </div>
            </div>
        )
    }
    render() {
        return this.state.before ? this.renderForm() : this.renderUI()
    }
}
export default ScoreAndWins