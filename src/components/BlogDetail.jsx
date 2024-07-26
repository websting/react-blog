import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { useRef } from "react"; // references smooth scroll
import BookReads from "./BookReads";

const BlogDetail = () => {
  // Smooth scroll to books read section
  const booksRef = useRef(null); // new

  // access route parameter to fetch the blog with that id
  const { id } = useParams();

  // access individual blogs
  const { data: blog, isPending } = useFetch(
    `https://websting.pythonanywhere.com/` + id
  );

  return (
    <div className="blog-detail">
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <h3>{blog.subtitle}</h3>

          {/* top home page link */}
          <Link className="left-arrow" to={`/`}>
            <span>
              &#8592; Back home<span className="bar">|</span>
            </span>
          </Link>

          {/* top books reads link */}
          <button
            className="btn"
            onClick={() => {
              booksRef.current?.scrollIntoView({
                behaviour: "smooth",
              });
            }}
          >
            Book Reads &#8595;
          </button>
          <hr />

          {/* -------- Renders detail part of blog ---------- */}
          <p className="detail-body">{blog.body}</p>

          {/* middle home page link */}
          <Link className="left-arrow" to={`/`}>
            <span>
              &#8592; Back home<span className="bar">|</span>
            </span>
          </Link>
          
          {/* middlel book read link */}
          <button
            className="btn"
            onClick={() => {
              booksRef.current?.scrollIntoView({
                behaviour: "smooth",
              });
            }}
          >
            Book Reads &#8595;
          </button>
          <hr />

          {/* Book Reads section */}
          <div ref={booksRef} id="books">
            <BookReads />
          </div>

          {/* bottom back to top link */}
          <button
            className="btn"
            onClick={() => {
              window.scroll({
                top: 0,
                behaviour: "smooth",
              });
            }}
          >
            Up Top &#8593;
          </button>
          <hr />
        </article>
      )}
    </div>
  );
};
export default BlogDetail;
