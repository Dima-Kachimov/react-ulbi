import React from 'react';
import s from './Post.module.scss'
const Post = ({post, number, removePost}) => {
    return (
        <div className={s.post}>
            <div>
                <strong>{number} {post.title}</strong>
                <p>{post.body}</p>
            </div>
            <button onClick={() => removePost(post)}>Удалить</button>
        </div>
    );
};
export default Post;