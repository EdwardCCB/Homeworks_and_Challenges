import React, { useState } from 'react';

const CounterComponent = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const handleSubstract = () => {
        setCounter(prevCounter => prevCounter - 1);
    };

    const handleReset = () => {
        setCounter(value);
    };

    return (
        <div>
            <span>{counter}</span>
            <button onClick={handleSubstract}></button>
            <button onClick={handleReset}></button>
        </div>
    )
}

export default CounterComponent;