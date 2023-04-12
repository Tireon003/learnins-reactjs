import React from "react";

import cl from './Panel.module.css';

import Button from '../Button/Button';
import Input from '../Input/Input';


const Panel = () => {

    return (
        <div className={cl.panel}>
            <Button>Добавить</Button>
            <Input
                placeHolder="Поиск"
            />
        </div>
    );
}

export default Panel;