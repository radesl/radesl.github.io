import React from 'react'

class WrapWeather extends React.Component{
    render(){
        const{items} = this.props
        console.log(items)
        const {
            current_observation: {
                display_location: {
                    city
                },
                feelslike_c,
                icon_url
            }
        } = items
        return (
            <div>
                <div>{city}</div>
                <div>{feelslike_c}</div>
                <img src={icon_url}/>
            </div>
        )
    }
}

export default WrapWeather