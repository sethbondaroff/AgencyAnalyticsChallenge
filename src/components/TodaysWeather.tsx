import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getIcon from '../functions/getIcon'

type Props = {
    temp: number,
    weather: string,
    icon: string
}

class TodaysWeather extends React.Component<Props> {
    render(){
        return(
            <div className='todayContainer'>
                <div className='todayHeader'>Today</div>
                <div className='todayInfo'>
                    <div>
                        <span className="fa-layers todayIcon">
                            <FontAwesomeIcon icon={getIcon(this.props.icon)} color="#2e4369" style={{width: '100%', height: '100%'}}/>
                            <FontAwesomeIcon icon={getIcon(this.props.icon)} color='#cdf0f0' transform="shrink-1" style={{width: '100%', height: '100%'}}/>
                        </span>
                    </div>
                    <div>
                        <div className='todayTemp'>{Math.round(this.props.temp)}°</div>
                        <div>{this.props.weather}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodaysWeather