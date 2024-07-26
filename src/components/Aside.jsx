//import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoPython } from "react-icons/io5";
//import { FaJava } from "react-icons/fa6";
const Aside = () => {
  return (
    <div className="col-sm-4">
      <h5 id="aside-title">Advertising Title</h5>
      <hr id="main-hr" />

      {/* aside greed row-one starts here */}
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img
              className="img-one"
              src="https://picsum.photos/75"
              alt="photo"
            />
          </div>
          <div className="col">
            <p>Add #1 here</p>
            <a href="#" className="btn">
              Link
            </a>
          </div>
        </div>
      </div>
      <hr />

      {/* aside greed row-two starts here */}
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img
              className="img-one"
              src="https://picsum.photos/75"
              alt="photo"
            />
          </div>
          <div className="col">
            <p>Add #2 here</p>
            <a href="#" className="btn">
              link
            </a>
          </div>
        </div>
      </div>
      <hr />

      {/* aside greed row-three starts here */}
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img
              className="img-one"
              src="https://picsum.photos/75"
              alt="photo"
            />
          </div>
          <div className="col">
            <p>Add #3 here</p>
            <a href="#" className="btn">
              link
            </a>
          </div>
        </div>
      </div>
      <hr id="main-hr" />
      <br />

      {/* bottom card */}
      <div className="card w-75 mx-auto shadow">
        <img
          src="https://picsum.photos/200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 id="feature-book">Book title here</h5>
          <p className="card-text-center">Some featured book here!</p>
          <a href="#" className="btn">
            Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aside;
