import React from 'react';

const TimeSelect = ({ handleTimeChange }) => {
    const times = ['Сегодня', 'На 5 дней'];

    return (
        <div>
            <h2>Выберите время</h2>
            <select onChange={handleTimeChange}>
                {times.map((time) => (<option key={time} value={time} >{time}</option>))}
            </select>
        </div>
    );
};

export default TimeSelect;