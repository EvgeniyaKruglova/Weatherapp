import React, { useState } from 'react';
import Weather from './components/weather';

const App = () => {
    const [city, setCity] = useState('');

    return (
        <div className="container">
            <Weather city={city} />
        </div>
    );
};

export default App;

