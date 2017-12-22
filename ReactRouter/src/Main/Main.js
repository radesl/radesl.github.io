import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Home'
import Roster from '../Roster'
import Shedule from '../Shedule'

class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/roster' component={Roster}/>
                <Route path='/shedule' component={Shedule}/>
            </Switch>
        )
    }
}

export default Main