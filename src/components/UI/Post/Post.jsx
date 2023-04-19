import React from 'react';
import { useNavigate } from 'react-router-dom';

import cl from './Post.module.css';

const Post = ({post}) => {

    const navigate = useNavigate();

    return (
        <div className={cl.post_form}
            onClick={() => navigate(`/posts/${post.id}`)}
        >
            <div className={cl.post_content}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
      </div>
    );
}

export default Post;