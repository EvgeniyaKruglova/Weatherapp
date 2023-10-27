import React, { useState } from 'react';
import CitySelect from './cityselect';
import TimeSelect from './timeselect';
import WeatherData from './weatherapi';
import '../styles/app.css';



const Weather = () => {
    const [selectedCity, setSelectedCity] = useState('Москва');
    const [selectedTime, setSelectedTime] = useState('Сегодня');

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    return (
        <div>
            <h1>Прогноз погоды</h1>
            <div className="choice">
                <CitySelect handleCityChange={handleCityChange} />
                <TimeSelect handleTimeChange={handleTimeChange} />
            </div>
            <WeatherData selectedCity={selectedCity} selectedTime={selectedTime}>
            </WeatherData>
        </div>
    );
};

export default Weather;


