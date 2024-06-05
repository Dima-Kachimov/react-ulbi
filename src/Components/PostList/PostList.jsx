import React from 'react';
import Post from "../Post/Post";

const PostList = ({posts, title, removePost}) => {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) => (
                <Post key={post.id} post={post} number={index + 1} removePost={removePost}/>
            ))}
        </>
    );
};

export default PostList;