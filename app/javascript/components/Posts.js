import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('/api/posts')
      .then(response => setPosts(response.data.posts));
  }, []);

  const renderAllPosts = () => (
    <ul>
      {posts.map(post => (
        <li key={post}>{post}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {renderAllPosts()}
    </div>
  )
};

export default Posts;
