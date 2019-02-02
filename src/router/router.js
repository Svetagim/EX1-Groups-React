import React from 'react'
import {Route} from 'react-router-dom'
import GroupList from '../Components/GroupList'
import MyGroups from '../Components/MyGroups'
import Header from '../Header'

const ReactRouter = () => {
    return(
        <React.Fragment>
            <Header/>
            <Route exact path="/" component={GroupList}/>
            <Route path="/MyGroups" component={MyGroups}/>
        </React.Fragment>
    )
}

export default ReactRouter