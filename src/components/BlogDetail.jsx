
import { Link } from "react-router-dom";
import useFetch from './useFetch';
import {useParams} from 'react-router-dom';
import { useRef } from "react"; // references smooth scroll


const BlogDetail = () => {
    // Smooth scroll to books read section
    const booksRef = useRef();

    const {id} = useParams()
    const {data: blog, isPending} = useFetch('https://websting.pythonanywhere.com/' + id);

    return ( 
        <div className="blog-detail">
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <h3>{blog.subtitle}</h3>
                    <Link className='left-arrow' to={`/`}><span >&#8592; Back home</span></Link>

                    {/* Button to books section */}
                    <button className="btn" onClick={() => {
                        booksRef.current?.scrollIntoView({
                            behaviour: 'smooth'
                        })
                    }}>
                        Book Reads &#8595;
                    </button>

                    <hr />
                    <p className="detail-body">{blog.body}</p>
                    <Link className='left-arrow' to={`/`}><span >&#8592; Back home</span></Link>
                    <hr />

                    {/* Book Reads section */}
                    <div id="books" ref={booksRef}>
                        <p>This is the section where books add will go!</p>
                    </div>
                </article>
            )}
        </div>
     );
}
export default BlogDetail;