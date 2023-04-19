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
import Header from './components/Header/Header.jsx';
import PostPage from './components/pages/PostPage.jsx';

function App() {

  

  return (
    <PostPage/>
  );
}

export default App;
