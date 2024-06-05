import './App.css';
import PostList from "./Components/PostList/PostList";
import FormNewPost from "./Components/FormNewPost/FormNewPost";
import {useState} from "react";

const postsData = [
    {id: 1, title: 'JavaScript', body: 'Язык програмирования'},
    {id: 2, title: 'JavaScript', body: 'Язык програмирования'},
    {id: 3, title: 'JavaScript', body: 'Язык програмирования'}
]

function App() {
    const [posts, setPosts] = useState(postsData)

    const createNewPost = (post) => {
        setPosts([...posts, post])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
        <FormNewPost create={createNewPost}/>
        <PostList removePost={removePost} posts={posts} title={'Список всех постов!'}/>
    </div>
  );
}

export default App;
