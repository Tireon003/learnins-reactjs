import React, { useState } from 'react';

import './Input.module.css';


const Input = ({placeHolder, setQuery, clearInput}) => {

    const [currentText, setCurrentText] = useState('');


    const getQuery = (e) => {
        setCurrentText(e.target.value);
        setQuery(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder={placeHolder}
            value={currentText}
            onChange={getQuery}
        />
    );
}

export default Input;