import React, { useContext } from "react";
import { InputQuery } from "../../../context";

import cl from './Panel.module.css';

import Button from '../Button/Button';
import Input from '../Input/Input';



const Panel = ({setVisible}) => {

    const [query, setQuery] = useContext(InputQuery);



    return (
        <div className={cl.panel}>
            <Button action={setVisible}>Добавить</Button>
            <Input
                placeHolder="Поиск"
                setQuery={setQuery}
            />
        </div>
    );
}

export default Panel;