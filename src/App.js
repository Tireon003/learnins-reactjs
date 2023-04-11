import React, { useState } from 'react';

import './App.css';

import PostList from './components/UI/PostList/PostList';
import Panel from './components/UI/Panel/Panel';


function App() {

  const [posts, setPosts] = useState([
    {key: 1, title: 'Первый пост', content: "Это первый пост на странице."},
    {key: 2, title: 'Второй пост', content: "А это второй пост на странице."},
    {key: 3, title: 'Третий пост', content: "Надо же, это же уже третий пост на сайте."},
    {key: 4, title: 'Четвертый пост', content: "Четверный пост на подходе."},
    {key: 5, title: 'Пятый пост', content: "Пяыйпост уже здесь."},
    {key: 6, title: 'Шестой пост', content: "Не прошло и ста лет, как на сайте появился шестой пост."}
  ]);

  const handleInputFromPanel = () => {
    
  }

  return (
    <div className="App">
      <Panel posts={posts}/>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
