const Aside = () => {
  return (
    // Aside Card
    <div className="col-sm-4">
      <div className="card">
        <img
          className="card-img-top"
          src="https://picsum.photos/200"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title ">Advertising title here!</h5>
          <p className="card-text text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            obcaecati ullam numquam nam quidem earum, est illo ea tempore
            officiis ducimus, animi debitis quaerat totam explicabo dicta
            eveniet, eligendi temporibus!. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eos, omnis sunt molestiae labore
            fugiat nemo cum nulla totam ipsum debitis repellendus voluptate
            illum aperiam facere ratione molestias aspernatur maiores nostrum.
          </p>
          <a href="#" className="btn btn-Info">
            Some link here &#8594;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aside;
