import React from 'react'
import '../App.css'
import API_KEY from '../constants/WEATHER_API_KEY'
import CITIES from '../constants/CITIES'
import CityLinks from './CityLinks'
import TodaysWeather from './TodaysWeather'
import Forecast from './Forecast'

type State = {
    city: string,
    forecast: Array<{
        temp: number,
        weather: string,
        day: string,
        icon: string
    }>,
    weather: {
        temp: number,
        weather: string,
        icon: string
    }
}

class Weather extends React.Component<{}, State> {
    state: Readonly<State> = {
        city: CITIES[0],
        forecast: [],
        weather: {
            temp: 0,
            weather: '',
            icon: ''
        }
    }

    setSelectedCity = (city: string) => {
        this.setState((prevState) => ({
            ...prevState,
            city: city
        }))
    }

    fetchWeatherData = (city: string) => {
        const weekday: Array<string> = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            this.setState((prevState) => ({
                ...prevState,
                weather: {
                    temp: data.main.temp,
                    weather: data.weather[0].main,
                    icon: data.weather[0].icon
                }
            }))
        })
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            const forecastData: Array<{
                temp: number,
                weather: string,
                day: string,
                icon: string
            }> = []
            for(const item of data.list){
                const time: string = item.dt_txt.substring(item.dt_txt.length - 8)
                if(time === '12:00:00'){
                    forecastData.push({
                        temp: item.main.temp,
                        weather: item.weather[0].main,
                        day: weekday[new Date(item.dt_txt).getDay()],
                        icon: item.weather[0].icon
                    })
                    if(forecastData.length === 4) break;
                }
            }
            this.setState((prevState) => ({
                ...prevState,
                forecast: forecastData
            }))
        })
    }

    componentDidMount(){
        this.fetchWeatherData(this.state.city)
    }

    componentDidUpdate(prevProps: Object, prevState: State){
        if(this.state.city !== prevState.city){
            this.fetchWeatherData(this.state.city)
        }
    }

    render() {
        return(
            <div className='weather'>
                <CityLinks cities={CITIES} selectedCity={this.state.city} setSelectedCity={this.setSelectedCity}/>
                <div className='container'>
                    <TodaysWeather weather={this.state.weather.weather} temp={this.state.weather.temp} icon={this.state.weather.icon}/>
                    <Forecast forecast={this.state.forecast} />
                </div>
            </div>
        )
    }
}

export default Weather