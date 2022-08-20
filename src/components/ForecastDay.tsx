import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getIcon from '../functions/getIcon'

type Props = {
    day: string,
    weather: string,
    temp: number,
    icon: string
}

class ForecastDay extends React.Component<Props>{
    render(){
        return(
            <div className='forecastDay'>
                <div className='forecastDayInner'>
                    <div className='forecastDayDay'>{this.props.day}</div>
                    <span className="forecastIcon">
                        <FontAwesomeIcon icon={getIcon(this.props.icon)} color="#cdf0f0" style={{width: '100%', height: '100%'}}/>
                    </span>
                    <div className='forecastDayTemp'>{Math.round(this.props.temp)}°</div>
                </div>
            </div>
        )
    }
}

export default ForecastDay