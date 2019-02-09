import React, {Component } from 'react'
import { MdSearch } from 'react-icons/md'

class ScoreAndWins extends Component {
    constructor(props)
    {
        super(props)
        this.state = { 
                points:"", 
                wins:""
                }
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.add = this.add.bind(this)
    }

    handleSubmit(event){ 
        console.log(this.state)
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
         .then(data => data.map(item => {
             this.add({group: item.Name, 
                     points: item.Points, 
                     wins: item.W, 
                     losses: item.L,
                     coach: item.Coach ,
                     players: item.Players
                 })}))
         .catch(err => console.error(err));
       };

    render(){
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
}
export default ScoreAndWins