import React from 'react'

const BlogList = (props) => {
    const blogs = props.blogs;
    const handleDelete = props.handleDelete;
  return (
    <div className = "blog-list">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <button onClick = {() => handleDelete(blog.id)}>delete</button>
            </div>
        ))}
    </div>
  )
}

export default BlogList