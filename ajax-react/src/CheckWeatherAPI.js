import React from 'react'
import WrapWeather from './WrapWeather'

class CheckWeatherAPI extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: {},
            isLoaded: false}
    }
componentWillMount(){
    fetch(`http://api.wunderground.com/api/4af47e77859b009e/conditions/q/CA/Washington.json`)
    .then(res => res.json())
    .then(
        (result) =>{
            this.setState({
                items: result,
                isLoaded: true
            })
        }
    )
}
render(){
    const{items, isLoaded} = this.state
    if(isLoaded){
        return <div><WrapWeather items={items}/></div>
    }
    return <span></span>
}
}
export default CheckWeatherAPI