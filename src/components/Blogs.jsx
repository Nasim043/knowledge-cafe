import React, { useEffect, useState } from 'react';
import SingleBlog from './SingleBlog';

const Blogs = ({handleSpentTime, handleBookMark}) => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(()=>{
    fetch('blog.json')
    .then((res)=> res.json())
    .then((data)=> setBlogs(data))
  },[])

  return (
    <div className='w-full md:w-4/5'>
      {blogs.map(blog=>(
        <SingleBlog 
          key={blog.id}
          blog={blog}
          handleSpentTime={handleSpentTime}
          handleBookMark={handleBookMark}
        />
      ))}
    </div>
  );
};

export default Blogs;