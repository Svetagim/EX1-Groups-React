import React from 'react'
import {Route} from 'react-router-dom'
import GroupList from '../Components/GroupList'
import UpdateScore from '../Components/UpdateScore'
import ScoreAndWins from '../Components/ScoreAndWins'
import Header from '../Header'

const ReactRouter = () => {
    return(
        <React.Fragment>
            <Header/>
            <Route exact path="http://shenkar.html5-book.co.il/2018-2019/dcs/dev_173/" component={GroupList}/>
            <Route path="/ScoreAndWins" component={ScoreAndWins}/>
            <Route path="/UpdateScore" component={UpdateScore}/>
            
            
        </React.Fragment>
    )
}

export default ReactRouter