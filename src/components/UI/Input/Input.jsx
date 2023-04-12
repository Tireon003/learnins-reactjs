import React, { useContext } from 'react';
import { InputQuery } from '../../../context';

import './Input.module.css';


const Input = ({placeHolder, handleInputQuery}) => {

    const [query, setQuery] = useContext(InputQuery);


    //Поиск можно адекватно реализовать только при помощи Context или Redux
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