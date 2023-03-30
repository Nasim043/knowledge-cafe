import React, { useEffect, useState } from 'react';
import SingleBlog from './SingleBlog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(()=>{
    fetch('blog.json')
    .then((res)=> res.json())
    .then((data)=> setBlogs(data))
  },[])

  return (
    <div>
      {blogs.map(blog=>(
        <SingleBlog 
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};

export default Blogs;