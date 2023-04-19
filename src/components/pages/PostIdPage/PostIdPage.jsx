import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useFetching } from '../../../hooks/useFetching';

import Loader from '../../UI/Loader/Loader';

import cl from './PostIdPage.module.css';


const PostIdPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await getPostById(id)
    })
    
    async function getPostById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        setPost(response.data)
    }

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div className={cl.box}>
            {isLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: 60}}><Loader/></div>
                : 
                <div className={cl.post__body}>
                    <h1 className={cl.post_title}>{post.title}</h1>
                    <p className={cl.post_description}>{post.body}</p>
                </div>
                }
        </div>
        
    );
}

export default PostIdPage;