import React from "react";

import cl from './Panel.module.css';

import Button from '../Button/Button';
import Input from '../Input/Input';


const Panel = () => {

    // const [handledQuery, setHandledQuery] = useState('')

    // const handleInputQuery = (query) => {
    //     setHandledQuery(query);
    // }

    return (
        <div className={cl.panel}>
            <Button>Добавить</Button>
            <Input
                placeHolder="Поиск"
                // handleInputQuery={handleInputQuery}
            />
        </div>
    );
}

export default Panel;