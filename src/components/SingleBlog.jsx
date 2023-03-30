import React from 'react';

const SingleBlog = (props) => {
  const { author_image, author_name, blog_title, cover_photo, published_date, read_time } = props.blog;
  const handleSpentTime = props.handleSpentTime;
  return (
    <div className="card w-11/12 bg-base-100 shadow-xl mb-8 rounded-none">
      <figure>
        <img src={cover_photo} alt={author_name} />
      </figure>
      <div className='flex justify-between items-center px-1 my-5'>
        <div className='flex gap-4'>
          <img className="w-14 rounded-full" src={author_image} alt={author_name} />
          <div>
            <p className='text-xl font-semibold'>{author_name}</p>
            <p className='text-[#9C9C9C] font-semibold'>{published_date}</p>
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <p className='text-[#9C9C9C] font-semibold'>{read_time} min read</p>
          <span className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          </span>
        </div>
      </div>
      <h2 className='text-3xl font-bold px-1'>{blog_title}</h2>
      <p className='font-medium text-lg px-1 my-4 text-blue-600 cursor-pointer underline decoration-blue-600' onClick={()=>{handleSpentTime(read_time)}}>Mark as read</p>
    </div>
  );
};

export default SingleBlog;