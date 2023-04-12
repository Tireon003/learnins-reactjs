import React, { useState, useContext, useMemo } from 'react';
import { InputQuery } from '../../../context';

import Post from '../Post/Post';

const PostList = ({posts}) => {


    // const [filteredPosts, setFilteredPosts] = useState({posts});

    const [query, setQuery] = useContext(InputQuery);
    

    // Здесь после реализации поиска завернуть функцию в useMemo()
    // const filterPosts = (query, filteredPosts) => {
    //     if(query) {
    //         setFilteredPosts([...filteredPosts].filter(post => post.title.toLowerCase().includes(query.toLowerCase())));
    //     } else {
    //         setFilteredPosts({posts});
    //     }
    // }

    const updateFilteredPosts = useMemo(() => {
        if(query) {
            return [...posts].filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
        }
        return posts;
    }, [query, posts]);

    return (
        <div>
            {/* {posts.map(post => <Post post={post}/>)} */}
            {/* {filteredPosts.map(post => <Post post={post}/>)} */}
            {updateFilteredPosts.map(post => <Post post={post}/>)}
        </div>
    );
}

export default PostList;