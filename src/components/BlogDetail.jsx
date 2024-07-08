
import { Link } from "react-router-dom";
import useFetch from './useFetch';
import {useParams} from 'react-router-dom';
import { useRef } from "react"; // references smooth scroll


const BlogDetail = () => {

    // Smooth scroll to books read section
    const booksRef = useRef(null); // new
    // access route parameter to fetch the blog with that id
    const {id} = useParams()
    // access individual blogs
    const {data: blog, isPending} = useFetch(`https://websting.pythonanywhere.com/` + id);

    return ( 
        <div className="blog-detail">
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <h3>{blog.subtitle}</h3>

                    {/* Top page link to home page */}
                    <Link className='left-arrow' to={`/`} ><span >&#8592; Back home</span></Link>

                    {/* Button link to books section */}
                    <button className="btn" onClick={() => {
                        booksRef.current?.scrollIntoView({
                            behaviour: 'smooth'
                            })
                        }}>Book Reads &#8595;</button>
                    <hr />

                    {/* -------- Renders detail part of blog ---------- */}
                    <p className="detail-body">{blog.body}</p>
                    {/* Bottom page link to home page */}
                    <Link className='left-arrow' to={`/`}><span >&#8592; Back home</span></Link>
                    <hr />
                    
                    {/* Book Reads section */}
                    <div ref={booksRef} id="books">
                        <p>This is the section where books add will go!</p>
                    </div>
                </article>
            )}
        </div>
     );
}
export default BlogDetail;