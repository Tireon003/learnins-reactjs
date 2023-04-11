import React, { useState } from 'react';

import cl from "./PostList.module.css";

import Post from '../Post/Post';

const PostList = ({posts}) => {


    const [filteredPosts, setFilteredPosts] = useState({posts});
    

    // Здесь после реализации поиска завернуть функцию в useMemo()
    const filterPosts = (query, filteredPosts) => {
        if(query) {
            setFilteredPosts([...filteredPosts].filter(post => post.title.toLowerCase().includes(query.toLowerCase())));
        } else {
            setFilteredPosts({posts});
        }
    }

    return (
        <div>
            {posts.map(post => <Post post={post}/>)}
            {/* {filteredPosts.map(post => <Post post={post}/>)} */}
        </div>
    );
}

export default PostList;