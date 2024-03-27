import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {
    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <h3>{blog.subtitle}</h3>
                    <p className="body-trankate">{blog.body}</p>
                    <Link className='right-arrow' to={`/blogs/${blog.id}`}><span >Keep reading &#8594;</span></Link>
                    
                    <hr />
                </div>
            ))}
        </div>
     );
}
export default BlogList;