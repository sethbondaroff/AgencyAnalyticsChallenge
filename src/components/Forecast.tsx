import React from 'react'
import ForecastDay from './ForecastDay'

type Props = {
    forecast: Array<{
        temp: number,
        weather: string,
        day: string,
        icon: string
    }>
}

class Forecast extends React.Component<Props>{
    render(){
        return(
            <div className='forecastContainer'>
                {this.props.forecast.map(item => <ForecastDay key={item.day} icon={item.icon} day={item.day} weather={item.weather} temp={item.temp}/>)}
            </div>
        )
    }
}

export default Forecast