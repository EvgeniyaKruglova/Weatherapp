import React from 'react';
import {citylist} from "./citylist";

const CitySelect = ({ handleCityChange }) => {
    return (
        <div>
            <h2>Выберите город</h2>
            <select onChange={handleCityChange}>
                {citylist.map((city) => (<option key={city} value={city} > {city}</option>))}
            </select>
        </div>
    );
};

export default CitySelect;

