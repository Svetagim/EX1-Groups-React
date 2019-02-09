import React, {Component } from 'react'
import { Redirect } from 'react-router-dom'
import { MdSave } from 'react-icons/md'
const path = window.location.pathname


class UpdateScore extends Component {
    constructor(props)
    {
        super(props)
        this.state = { 
                Name:"", 
                Points:"",
                redirect: false
                }
        this.handleSubmit = this.handleSubmit.bind(this);  
    }

    handleSubmit(event){ 
        event.preventDefault();
        let formBody = [];
        for (var property in this.state) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(this.state[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }       
        formBody = formBody.join("&");
        
        const url = 'https://ex1-groups.herokuapp.com/setscore/';
        
        fetch(url, {
         method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
        body: formBody
        })
        .then(res => res.json())
        .then(() => alert("Update completed"), 
        this.setState({ redirect: true },
        this.render = ()=>(
        <Redirect to={`${path}`}/>)))
        .catch(err => console.error(err));
       };

       render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Group name:</p>
                    <input placeholder="Name" type="text" name="Name" onChange={(ev)=>this.setState({Name:ev.target.value})}/>
                    <p>Group Score:</p>
                    <input placeholder="Points" type="text" name="Points" onChange={(ev)=>this.setState({Points:ev.target.value})}/>
                    <br></br>
                    <button type = "submit" className="btn btn-primary" style={{marginRight: 7+'px'}}><MdSave/></button>
                </form>
            </div>
        )
    }
}

export default UpdateScore