import React, { useContext, useMemo } from 'react';
import { InputQuery } from '../../../context';

import Post from '../Post/Post';

const PostList = ({posts}) => {

    const [query, setQuery] = useContext(InputQuery);
    
    const updateFilteredPosts = useMemo(() => {
        if(query) return [...posts].filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
        return posts;
    }, [query, posts]);

    return (
        //Добавил условие, что если посты по запросу не найдены, то выводится соответствующее сообщение. 
        <div>
            {updateFilteredPosts.length ?
            updateFilteredPosts.map(post => <Post post={post}/>)
            : <h1 style={{textAlign: "center"}}>Посты по запросу "{query}" не найдены!</h1>}
        </div>
    );
}

export default PostList;