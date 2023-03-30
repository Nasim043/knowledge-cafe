import React from 'react';

const SingleBlog = (props) => {
  const { author_image, author_name, blog_title, cover_photo, published_date, read_time } = props.blog;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={cover_photo} alt={author_name} />
      </figure>
      <img className="w-14 rounded-full" src={author_image} alt={author_name} />
      <p>{published_date}</p>
      <p>{read_time}</p>
        <h2>{blog_title}</h2>
        <p>Mark as read</p>
      </div>
  );
};

export default SingleBlog;