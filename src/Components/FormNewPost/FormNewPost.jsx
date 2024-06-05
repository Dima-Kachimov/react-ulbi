import React, {useState} from 'react';

const FormNewPost = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const createNewPost = (e) => {
        e.preventDefault()
        create({...post, id: Date.now()})
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <input
                type="text"
                placeholder={'Заголовок'}
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <input
                type="text"
                placeholder={'Описание'}
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <button onClick={createNewPost}>Опубликовать</button>
        </form>
    );
};

export default FormNewPost;