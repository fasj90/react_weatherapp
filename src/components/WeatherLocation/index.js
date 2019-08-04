import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import {SUN} from './../../constants/weathers';

const location = 'Cali,co';
const api_key = '1b08823ebf67d2a34bf261356f48371c';
const api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
};

class WeatherLocation extends Component 
{
    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires!fas',
            data: data1
        };
        console.log('constructor');
    }

    handleUpdateClick = async () => {
        const response = await fetch(api_weather);
        const weather_data = await response.json();
        // debugger;
        const data = transformWeather(weather_data);
        this.setState({data}, ()=>{
            console.log('actualizado');
        });
    }

    
    componentWillMount() {
        console.log('componentWillMount');
    }
    

    render = () => {
        const {city, data} = this.state;

        return (
        <div className='weatherLocationCont'>
            <Location city = {city}/>
            <WeatherData data = {data}/>
            <button onClick={this.handleUpdateClick}>Refresh</button>
        </div>);
    };
};

export default WeatherLocation;