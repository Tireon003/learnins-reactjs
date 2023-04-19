import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header.jsx';
import HomePage from './components/pages/HomePage.jsx';
import PostPage from './components/pages/PostPage';
import InfoPage from './components/pages/InfoPage';
import ErrPage from './components/pages/ErrPage';
import PostIdPage from './components/pages/PostIdPage/PostIdPage';


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>

        <Route path='/home' element={<HomePage/>}/>
        <Route path='/posts' element={<PostPage/>}/>
        <Route path='/posts/:id' element={<PostIdPage/>}/>
        <Route path='/info' element={<InfoPage/>}/>
        <Route path='/error' element={<ErrPage/>}/>
        <Route path='*' element={<Navigate to='/error'/>}/>

      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
