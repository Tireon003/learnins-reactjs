import React, { useState } from 'react';
import { InputQuery, NewPostData, ClearInput } from './context.js';

import './App.css';

import PostList from './components/UI/PostList/PostList';
import Panel from './components/UI/Panel/Panel';
import Modal from './components/UI/Modal/Modal.jsx';
import CreatePostForm from './components/UI/CreatePostForm/CreatePostForm.jsx';

function App() {

  const [posts, setPosts] = useState([
    {key: 1, title: 'Первый пост', content: "Это первый пост на странице."},
    {key: 2, title: 'Второй пост', content: "А это второй пост на странице."},
    {key: 3, title: 'Третий пост', content: "Надо же, это же уже третий пост на сайте."},
    {key: 4, title: 'Четвертый пост', content: "Четверный пост на подходе."},
    {key: 5, title: 'Пятый пост', content: "Пятый пост уже здесь."},
    {key: 6, title: 'Шестой пост', content: "Не прошло и ста лет, как на сайте появился шестой пост."}
  ]);

  //to keep query from search in context InputQuery
  const [query, setQuery] = useState('');

  const [showModal, setShowModal] = useState(false);

  const [newPostData, setNewPostData] = useState({key: Date.now(), title: '', content: ''});

  const [clearInput, setClearInput] = useState(false);

  const createPost = () => {
    if(newPostData.title && newPostData.content) {
      setPosts([newPostData, ...posts]);

      setShowModal(false); 
    }
  }

  return (
    <InputQuery.Provider value={[query, setQuery]}>
      <NewPostData.Provider value={[newPostData, setNewPostData]}>
          <div className="App">
            <ClearInput.Provider value={[clearInput, setClearInput]}>
              <Modal visible={showModal} setVisible={setShowModal}>
                <CreatePostForm createPost={createPost}/>
              </Modal>
            </ClearInput.Provider>
            <Panel posts={posts} setVisible={setShowModal}/>
            <PostList posts={posts}/>
          </div>
      </NewPostData.Provider>
    </InputQuery.Provider>
  );
}

export default App;
