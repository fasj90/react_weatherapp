import convert from 'convert-units';
import {SUN} from './../constants/weathers';

const getTemp = kelvin =>{
    return convert(kelvin).from('K').to('C'); //.toFixed(2);
}

const getWeatherState = weather =>{
    return SUN;
}

const transformWeather = weather_Data => {
    const { humidity, temp } = weather_Data.main;
    const { speed } = weather_Data.wind;
    const weatherState = getWeatherState('weather');
    const temperature = getTemp(temp);
    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }

    return data;
}

export default transformWeather;