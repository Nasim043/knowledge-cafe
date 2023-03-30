import React, { useEffect, useState } from 'react';
import SingleBlog from './SingleBlog';

const Blogs = ({handleSpentTime}) => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(()=>{
    fetch('blog.json')
    .then((res)=> res.json())
    .then((data)=> setBlogs(data))
  },[])

  return (
    <div className='w-4/5 bg-red-300'>
      {blogs.map(blog=>(
        <SingleBlog 
          key={blog.id}
          blog={blog}
          handleSpentTime={handleSpentTime}
        />
      ))}
    </div>
  );
};

export default Blogs;