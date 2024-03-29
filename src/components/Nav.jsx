import { Link } from 'react-router-dom';
import { FaInstagram, FaCodepen, FaCommentAlt, FaGithub } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";


const Nav = () => {
    return ( 
        <header data-bs-theme="dark">
            <div className="collapse text-bg-dark" id="navbarHeader">
                <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                    <h4>About</h4>
                    <p className="text-body-secondary">Hi my name is Antonio, but these days I also call myself a blog enthusiast.  The articles I brag about here are related to Web Development and coding in general.  The content is for you to agree, desagree or comment if you like -  Just be nice :)</p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                    <h4 className='contact'>Contact</h4>
                    <ul className="list-unstyled">
                        <li><Link to="https://www.instagram.com/" alt='instagram' className="text-white" target='new' data-toggle='tooltip' data-placement='right' title='Instagram'><FaInstagram size={25}/></Link></li>
                        <li><Link to="https://codepen.io/aherrera001" className="text-white" target='new'
                        data-toggle='tooltip' data-placement='right' title='CodePen'><FaCodepen size={23}/></Link></li>
                        <li><Link to="https://github.com/websting" className="text-white" target='new' data-toggle='tooltip' data-placement='right' title='Git'><FaGithub size={23}/></Link></li>
                        <li><Link id='icons' to="mailto:anttonio.herrera@gmail.com" className="text-white"
                        data-toggle='tooltip' data-placement='right' title='Comments'><FaCommentAlt size={20}/></Link></li>
                        <li><Link to="https://aherreraportfolio.netlify.app/" className="text-white" target='new' data-toggle='tooltip' data-placement='right' title='Hire me'><BsPersonWorkspace size={23}/></Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <h4><Link className='nav-home-link' to={'/'}>ahBlogs</Link></h4>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
            </div>
        </header>
     );
}
export default Nav;