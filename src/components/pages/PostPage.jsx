import React, { useEffect, useState } from 'react';
import { InputQuery, NewPostData } from '../../context.js';
import axios from 'axios';

import PostList from '../UI/PostList/PostList';
import Panel from '../UI/Panel/Panel';
import Modal from '../UI/Modal/Modal.jsx';
import CreatePostForm from '../UI/CreatePostForm/CreatePostForm';
import Loader from '../UI/Loader/Loader.jsx';
import { useFetching } from '../../hooks/useFetching.jsx';

const PostPage = () => {
    
    const [posts, setPosts] = useState([]);

  const [query, setQuery] = useState('');

  const [showModal, setShowModal] = useState(false);

  const [newPostData, setNewPostData] = useState({key: Date.now(), title: '', body: '', id: Date.now()});
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
            <div className='page_body'>
              <Modal visible={showModal} setVisible={setShowModal}>
                <CreatePostForm createPost={createPost}/>
              </Modal>
              <Panel posts={posts} setVisible={setShowModal}/>
              {postError && <h1 style={{textAlign: "center", marginTop: 20}}>Произошла ошибка... {postError}</h1>}
              {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: 60}}><Loader/></div>
                : <PostList posts={posts}/>}
            </div>
          </div> 
        </NewPostData.Provider>
      </InputQuery.Provider>
    );
}

export default PostPage;