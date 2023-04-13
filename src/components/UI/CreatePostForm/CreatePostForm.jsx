import React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';

const CreatePostForm = ({createPost}) => {
    return (
        <div>
            <h1>Создание поста:</h1>
              <div style={{marginTop: 20}}>
                <Input placeHolder="Заголовок"/>
              </div>
              <div style={{marginTop: 20}}>
                <Input placeHolder="Содержание поста"/>
              </div>
              <div style={{marginTop: 20}}>
                <Button action={createPost}>Создать</Button>
              </div>
        </div>
    );

}

export default CreatePostForm;