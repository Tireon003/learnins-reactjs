import React, { useEffect, useState } from 'react';
import { InputQuery, NewPostData } from './context.js';
import axios from 'axios';

import './App.css';

import PostList from './components/UI/PostList/PostList';
import Panel from './components/UI/Panel/Panel';
import Modal from './components/UI/Modal/Modal.jsx';
import CreatePostForm from './components/UI/CreatePostForm/CreatePostForm.jsx';
import Loader from './components/UI/Loader/Loader.jsx';
import { useFetching } from './hooks/useFetching.jsx';

function App() {

  const [posts, setPosts] = useState([]);

  //to keep query from search in context InputQuery
  const [query, setQuery] = useState('');

  const [showModal, setShowModal] = useState(false);

  const [newPostData, setNewPostData] = useState({key: Date.now(), title: '', body: ''});
  const [loadPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data);
  })
  
  useEffect(() => {
    loadPosts()
  }, []);

const createPost = () => {
    if(newPostData.title && newPostData.body) {
      setPosts([newPostData, ...posts]);
      setShowModal(false); 
    }
  }

  return (
    <InputQuery.Provider value={[query, setQuery]}>
      <NewPostData.Provider value={[newPostData, setNewPostData]}>
          <div className="App">
            <Modal visible={showModal} setVisible={setShowModal}>
                <CreatePostForm createPost={createPost}/>
            </Modal>
            <Panel posts={posts} setVisible={setShowModal}/>
            {postError && <h1 style={{textAlign: "center", marginTop: 20}}>Произошла ошибка... {postError}</h1>}
            {isPostsLoading
              ? <div style={{display: "flex", justifyContent: "center", marginTop: 60}}><Loader/></div>
              : <PostList posts={posts}/>}
          </div>
      </NewPostData.Provider>
    </InputQuery.Provider>
  );
}

export default App;
