import React from 'react';

import cl from './Post.module.css';

const Post = ({post}) => {


    return (
        <div className={cl.post_form}>
            <div className={cl.post_content}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
      </div>
    );
}

export default Post;