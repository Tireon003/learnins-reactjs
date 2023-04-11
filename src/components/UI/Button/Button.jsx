import React, {useState} from 'react';

import './Button.module.css';

const Button = ({children, action}) => {
    
    return (
        <button onClick={action}>
            {children}
        </button>
    );
}

export default Button;