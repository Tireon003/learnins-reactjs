import React, { useContext, useState } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import { ClearInput, NewPostData } from '../../../context';

const CreatePostForm = ({createPost}) => {

  const [newPostData, setNewPostData] = useContext(NewPostData);

  const getNewTitle = (searchQuery) => {
    setNewPostData({
      ...newPostData,
      title: searchQuery
    });
  }

  const getNewContent = (searchQuery) => {
    setNewPostData({
      ...newPostData,
      content: searchQuery
    });
  }

    return (
      
        <div>
            <h1>Создание поста:</h1>
              <div style={{marginTop: 20}}>
                <Input placeHolder="Заголовок" setQuery={getNewTitle}/>
              </div>
              <div style={{marginTop: 20}}>
                <Input placeHolder="Содержание поста" setQuery={getNewContent}/>
              </div>
              <div style={{marginTop: 20}}>
                <Button action={createPost}>Создать</Button>
              </div>
        </div>
        
    );

}

export default CreatePostForm;