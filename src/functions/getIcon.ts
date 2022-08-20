import { 
    faCloud,
    faSun,
    faCloudSun,
    faCloudRain,
    faSnowflake,
    faCloudBolt,
    faSmog
} from '@fortawesome/free-solid-svg-icons'

const getIcon = (iconCode: string) => {
    if(iconCode === '01d' || iconCode === '01n'){
        return faSun
    } else if(iconCode === '02d' || iconCode === '02n'){
        return faCloudSun
    } else if(iconCode === '03d' || iconCode === '03n' || iconCode === '04d' || iconCode === '04n'){
        return faCloud
    } else if(iconCode === '09d' || iconCode === '09n' || iconCode === '10d' || iconCode === '10n'){
        return faCloudRain
    } else if(iconCode === '11d' || iconCode === '11n'){
        return faCloudBolt
    } else if(iconCode === '11d' || iconCode === '11n'){
        return faSnowflake
    } else if(iconCode === '50d' || iconCode === '50n'){
        return faSmog
    }
    return faSun
}

export default getIcon