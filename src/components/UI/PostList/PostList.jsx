import React, { useState, useContext, useMemo } from 'react';
import { InputQuery } from '../../../context';

import Post from '../Post/Post';

const PostList = ({posts}) => {

    const [query, setQuery] = useContext(InputQuery);
    
    const updateFilteredPosts = useMemo(() => {
        if(query) {
            return [...posts].filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
        }
        return posts;
    }, [query, posts]);

    return (
        <div>
            {updateFilteredPosts.map(post => <Post post={post}/>)}
        </div>
    );
}

export default PostList;