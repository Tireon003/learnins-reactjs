import React, { useState } from 'react';

import cl from './Modal.module.css';
import { ClearInput } from '../../../context';

const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.modal]
    if(visible) rootClasses.push(cl.active)

    return (
        
            <div
                className={rootClasses.join(' ')}
                onClick={() => {
                    setVisible(false);
                }}
            >
                <div
                    className={cl.modalContent}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {children}
                </div>
            </div>
    );
}

export default Modal;