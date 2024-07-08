import { Link } from "react-router-dom";

const BlogList = ({blogs}) => { //destructuring blogs property
    return ( 
        <div className="blog-list">
            {/* maps each blog item and displays on screen */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>

                    {/* New card sstars here */}
                    <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={blog.image} className="rounded img-thumbnail" alt="photo" />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{blog.title}</h1>
                            <h3 className="card-title">{blog.subtitle}</h3>
                            <p className="body-trankate">{blog.body}</p>
                            <Link className='right-arrow' to={`/blogs/${blog.id}`}><span >Keep reading &#8594;
                        </span></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* New card end */}

                    {/* ----------------Old Card---------------------------------- */}
                    {/* <img src={blog.image} alt="photo" />
                    <h1>{blog.title}</h1>
                    <h3>{blog.subtitle}</h3>
                    <p className="body-trankate">{blog.body}</p>
                    <Link className='right-arrow' to={`/blogs/${blog.id}`}><span >Keep reading &#8594;
                        </span></Link>
                    <hr /> */}
                </div>
            ))}
        </div>
     );
}
export default BlogList;