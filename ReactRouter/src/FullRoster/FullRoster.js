import React from 'react'
import {Link} from 'react-router-dom'
import PlayerAPI from '../PlayerAPI'

class FullRoster extends React.Component{
    render(){
        return(
            <ul>
            {
              PlayerAPI.all().map(p => (
                <li key={p.number}>
                  <Link to={`/roster/${p.number}`}>{p.name}</Link>
                </li>
              ))
            }
          </ul>
        )
    }
}

export default FullRoster