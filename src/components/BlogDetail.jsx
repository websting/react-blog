
import { Link } from "react-router-dom";
import useFetch from './useFetch';
import {useParams} from 'react-router-dom';


const BlogDetail = () => {
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
                    <hr />
                    <p className="detail-body">{blog.body}</p>
                    <Link className='left-arrow' to={`/`}><span >&#8592; Back home</span></Link>
                    <hr />
                </article>
            )}
        </div>
     );
}
export default BlogDetail;