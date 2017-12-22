import React from 'react'
import PlayerAPI from '../PlayerAPI'


class Player extends React.Component{
    constructor(props){
        super(props)
    }
    PlayerList(){
        PlayerAPI.get(ParseInt(props.match.params.number, 10))
    }
    render(){
        return(
            <div>
                <div>{player.name} (#{player.number})</div>
                <div>{player.position}</div>
            </div>
        )
    }
}

export default Player