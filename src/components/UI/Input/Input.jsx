import React, { useState } from 'react';

import './Input.module.css';


const Input = ({placeHolder, handleInputQuery}) => {

    const [query, setQuery] = useState('');

    const getQuery = (e) => {
        setQuery(e.target.value);
        // handleInputQuery(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder={placeHolder}
            value={query}
            onChange={getQuery}
        />
    );
}

export default Input;