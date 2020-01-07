import React from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [posts, setPost] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://www.reddit.com/r/reactjs.json").then(res => {
      {
        const newPosts = res.data.data.children.map(obj => obj.data);
        console.log(newPosts);
        setPost(newPosts);
      }
    });
  }, []);
  return (
    <div className="App">
      <h1>Reddit</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}> {post.title} </li>
        ))}
      </ul>
    </div>
  );
}
