import { Link } from "react-router-dom";
import Aside from "./Aside";

// Main content
const BlogList = ({ blogs }) => {
  //destructuring blogs property
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          {/* maps each blog item and displays on screen */}
          {blogs.map((blog) => (
            // Bootstra card starts here
            <div
              className="card mb-3 blog-preview shadow mb-5 rounded"
              key={blog.id}
            >
              <img className="card-img-top" src={blog.image} alt="photo" />
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{blog.title}</h2>
                  <h5 className="card-title">{blog.subtitle}</h5>
                  <p className="body-trankate">{blog.body}</p>
                  <Link className="right-arrow" to={`/blogs/${blog.id}`}>
                    <span>READ MORE &#8594;</span>
                  </Link>
                </div>
              </div>
            </div>
            // Card ends here
          ))}
        </div>
        {/* Aside container content */}
        <Aside />
      </div>
    </div>
  );
};
export default BlogList;
