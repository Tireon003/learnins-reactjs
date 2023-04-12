import React, { useContext } from 'react';
import { InputQuery } from '../../../context';

import './Input.module.css';


const Input = ({placeHolder}) => {

    const [query, setQuery] = useContext(InputQuery);

    const getQuery = (e) => {
        setQuery(e.target.value);
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